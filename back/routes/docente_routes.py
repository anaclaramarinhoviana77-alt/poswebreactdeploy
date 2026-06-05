from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from db.database import get_db
from models.docente_model import Docente
from models.user_model import Usuario
from schemas.docente_schema import DocenteCreate, DocenteResponse
from core.security import hash_password

router = APIRouter(prefix="/docentes", tags=["Docentes"])


@router.post("/", response_model=DocenteResponse, status_code=status.HTTP_201_CREATED)
def criar_docente(dados: DocenteCreate, db: Session = Depends(get_db)):
    # 1. aqui checa CPF ou email duplicado
    if db.query(Docente).filter((Docente.cpf == dados.cpf) | (Docente.email == dados.email)).first():
        raise HTTPException(status_code=409, detail="CPF ou email ja cadastrado")
    if db.query(Usuario).filter(Usuario.email == dados.email).first():
        raise HTTPException(status_code=409, detail="Email ja cadastrado")

    # 2.  aqui vai criar o login (Usuario) com senha em hash, role docente
    usuario = Usuario(
        email=dados.email,
        senha_hash=hash_password(dados.senha),
        role="docente",
    )
    db.add(usuario)
    db.flush()

    # 3. cria o Docente ligado ao login
    docente = Docente(
        nome=dados.nome,
        cpf=dados.cpf,
        titulacao=dados.titulacao,
        email=dados.email,
        usuario_id=usuario.id,
    )
    db.add(docente)
    db.commit()
    db.refresh(docente)
    return docente


@router.get("/", response_model=list[DocenteResponse])
def listar_docentes(db: Session = Depends(get_db)):
    return db.query(Docente).all()