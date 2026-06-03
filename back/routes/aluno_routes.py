from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from db.database import get_db
from models.aluno_model import Aluno
from schemas.aluno_schema import AlunoCreate, AlunoResponse

router = APIRouter(prefix="/alunos", tags=["Alunos"])


@router.post("/", response_model=AlunoResponse, status_code=status.HTTP_201_CREATED)
def criar_aluno(dados: AlunoCreate, db: Session = Depends(get_db)):
    # nao deixa cadastrar matricula ou email repetido
    existe = db.query(Aluno).filter(
        (Aluno.matricula == dados.matricula) | (Aluno.email == dados.email)
    ).first()
    if existe:
        raise HTTPException(status_code=409, detail="Matricula ou email ja cadastrado")

    aluno = Aluno(**dados.model_dump())
    db.add(aluno)
    db.commit()
    db.refresh(aluno)
    return aluno


@router.get("/", response_model=list[AlunoResponse])
def listar_alunos(db: Session = Depends(get_db)):
    return db.query(Aluno).all()
