from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from db.database import get_db
from models.matricula_model import Matricula
from models.turma_model import Turma
from models.aluno_model import Aluno
from schemas.matricula_schema import MatriculaCreate, MatriculaResponse
from core.security import get_current_user

router = APIRouter(prefix="/matriculas", tags=["Matriculas"])


@router.post("/", response_model=MatriculaResponse, status_code=status.HTTP_201_CREATED)
def matricular(
    dados: MatriculaCreate,
    db: Session = Depends(get_db),
    logado: dict = Depends(get_current_user),
):
    #  descobrir o ALUNO a partir do token (pelo usuario_id, NAO do corpo)
    aluno = db.query(Aluno).filter(Aluno.usuario_id == int(logado["id"])).first()
    if aluno is None:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Apenas alunos podem se matricular")

    # a turma existe?
    turma = db.query(Turma).filter(Turma.id == dados.turma_id).first()
    if turma is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Turma nao encontrada")

    #  ja matriculado nessa turma?
    ja_existe = db.query(Matricula).filter(
        Matricula.aluno_id == aluno.id,
        Matricula.turma_id == turma.id,
    ).first()
    if ja_existe:
        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail="Voce ja esta matriculado nessa turma")

    #  tem vaga?
    if turma.vagas_disponiveis <= 0:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Sem vagas nessa turma")

    #  salva a matricula E diminui 1 vaga -- JUNTOS (uma transacao)
    nova = Matricula(aluno_id=aluno.id, turma_id=turma.id)
    turma.vagas_disponiveis -= 1
    db.add(nova)
    db.commit()
    db.refresh(nova)
    return nova