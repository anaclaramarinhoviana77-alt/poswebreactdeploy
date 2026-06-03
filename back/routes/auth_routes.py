from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from db.database import get_db
from models.user_model import Usuario
from schemas.auth_schema import LoginRequest, TokenResponse
from core.security import verify_password, create_access_token

router = APIRouter(tags=["Autenticação"])


@router.post("/login", response_model=TokenResponse)
def login(dados: LoginRequest, db: Session = Depends(get_db)):
    # [item 2] busca o usuário pelo email
    usuario = db.query(Usuario).filter(Usuario.email == dados.email).first()

    # [item 5] se não existe OU a senha não bate -> 401 (mesma mensagem pros dois,
    # pra não revelar se o email existe)
    if not usuario or not verify_password(dados.senha, usuario.senha_hash):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Credenciais inválidas",
        )

    # [item 3] gera o token JWT com o id e a role do usuário
    token = create_access_token(user_id=usuario.id, role=usuario.role)

    # [item 4] retorna o token (status 200 é o padrão de um POST que dá certo)
    return TokenResponse(access_token=token)
