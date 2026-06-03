import os
from datetime import datetime, timedelta, timezone

from dotenv import load_dotenv
from jose import jwt
from passlib.context import CryptContext

load_dotenv()

# Configuração do JWT. O ideal é por o JWT_SECRET no .env (cai no fallback se não tiver).
JWT_SECRET = os.getenv("JWT_SECRET", "dev-secret-troque-em-producao")
JWT_ALGORITHM = "HS256"
JWT_EXPIRE_MINUTES = 60

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def hash_password(senha_pura: str) -> str:
    """Gera o hash bcrypt de uma senha. Usar no cadastro de usuário."""
    return pwd_context.hash(senha_pura)


def verify_password(senha_pura: str, senha_hash: str) -> bool:
    """Compara a senha digitada com o hash do banco. Usar no login."""
    return pwd_context.verify(senha_pura, senha_hash)


def create_access_token(user_id: int, role: str) -> str:
    """Gera um JWT contendo o id do usuário, a role e a expiração."""
    expira = datetime.now(timezone.utc) + timedelta(minutes=JWT_EXPIRE_MINUTES)
    payload = {"sub": str(user_id), "role": role, "exp": expira}
    return jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)
