from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from db.database import get_db
from models.turma_model import Turma
from schemas.turma_schema import TurmaCreate, TurmaResponse
from core.security import get_current_user

router = APIRouter(prefix="/turmas", tags=["Turmas"])

@router.post("/", response_model=TurmaResponse, status_code=status.HTTP_201_CREATED)
def criar_turma(dados: TurmaCreate, db: Session = Depends(get_db), logado : dict = Depends(get_current_user)):

    #aqui checa se a disciplina ja tem turma
    if db.query(Turma).filter(Turma.disciplina_id == dados.disciplina_id).first():
        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail="essa disciplina ja possui turma cadastrada")
    
    nova_turma = Turma(
        disciplina_id=dados.disciplina_id,
        docente_id=dados.docente_id,
        semestre=dados.semestre,
        vagas_total=dados.vagas_total
    )

    db.add(nova_turma)
    db.commit()
    db.refresh(nova_turma)

    return nova_turma
    

