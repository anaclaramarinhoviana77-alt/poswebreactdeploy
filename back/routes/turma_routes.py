from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from db.database import get_db
from models.turma_model import Turma
from models.disciplina_model import Disciplina
from models.docente_model import Docente
from schemas.turma_schema import TurmaCreate, TurmaResponse
from core.security import require_admin

router = APIRouter(prefix="/turmas", tags=["Turmas"])

@router.post("/", response_model=TurmaResponse, status_code=status.HTTP_201_CREATED)
def criar_turma(dados: TurmaCreate, db: Session = Depends(get_db), logado : dict = Depends(require_admin)):

    #verificar se o professor existe
    professor_existe = db.query(Docente).filter(Docente.id == dados.docente_id).first()
    if not professor_existe:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"professor com Dados {dados.docente_id}, não foi encontrado")
    
    #verificar se a disciplina existe
    disciplina_existe = db.query(Disciplina).filter(Disciplina.id == dados.disciplina_id).first()
    if not disciplina_existe:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"A disciplina com Dados {dados.disciplina_id}, não foi encontrado")

    
    nova_turma = Turma(
        disciplina_id=dados.disciplina_id,
        docente_id=dados.docente_id,
        semestre=dados.semestre,
        vagas_total=dados.vagas_total,
        vagas_disponiveis=dados.vagas_total,
        codigo=dados.codigo
    )

    db.add(nova_turma)
    db.commit()
    db.refresh(nova_turma)

    return nova_turma
    

