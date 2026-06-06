from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from db.database import get_db
from models.aluno_model import Aluno
from models.user_model import Usuario          # novo para criar o login do aluno (Usuario) no momento da criação do Aluno
from schemas.aluno_schema import AlunoCreate, AlunoResponse
from core.security import hash_password          # novo para hashear a senha do aluno no momento da criação do login (Usuario)

router = APIRouter(prefix="/alunos", tags=["Alunos"])


@router.post("/", response_model=AlunoResponse, status_code=status.HTTP_201_CREATED)
def criar_aluno(dados: AlunoCreate, db: Session = Depends(get_db)):
    # 1. checa CPF ou email duplicado aqui
    if db.query(Aluno).filter((Aluno.cpf == dados.cpf) | (Aluno.email == dados.email)).first():
        raise HTTPException(status_code=409, detail="CPF ou email ja cadastrado")
    if db.query(Usuario).filter(Usuario.email == dados.email).first():
        raise HTTPException(status_code=409, detail="Email ja cadastrado")

    # 2. cria o login (Usuario) com a senha em HASH(nao salve a senha em texto puro)
    usuario = Usuario(
        email=dados.email,
        senha_hash=hash_password(dados.senha),
        role="estudante",
    )
    db.add(usuario)
    db.flush()   # preenche o usuario.id sem commitar ainda

    # 3. cria o Aluno ligado ao login
    aluno = Aluno(
        nome=dados.nome,
        cpf=dados.cpf,
        email=dados.email,
        data_nascimento=dados.data_nascimento,
        usuario_id=usuario.id,
    )
    db.add(aluno)
    db.commit()
    db.refresh(aluno)
    return aluno


@router.get("/", response_model=list[AlunoResponse])
def listar_alunos(db: Session = Depends(get_db)):
    return db.query(Aluno).all()