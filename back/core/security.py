import os
from datetime import datetime, timedelta, timezone
from dotenv import load_dotenv
from jose import jwt, JWTError
from passlib.context import CryptContext
from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials

load_dotenv()


# Configuração do JWT. O ideal é por o JWT_SECRET no .env (aqui vai cair no fallback se não tiver la).
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


# Autenticação: lê o token do header Authorization e valida (quem é você?)
security_scheme = HTTPBearer(auto_error=False)


def get_current_user(cred: HTTPAuthorizationCredentials = Depends(security_scheme)):
    erro_401 = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Token invalido ou ausente",
    )
    # le o cabecalho Authorization; se nao tiver token -> 401
    if cred is None:
        raise erro_401
    # decodifica e valida assinatura + expiracao
    try:
        payload = jwt.decode(cred.credentials, JWT_SECRET, algorithms=[JWT_ALGORITHM])
    except JWTError:
        raise erro_401
    # extrai o id e a role de dentro do token
    user_id = payload.get("sub")
    role = payload.get("role")
    if user_id is None:
        raise erro_401
    return {"id": user_id, "role": role}


# Autorização: só deixa passar quem tem role admin (você PODE fazer isso?)
def require_admin(user: dict = Depends(get_current_user)):
    if user["role"] != "admin":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Acesso restrito (apenas admin)",
        )
    return user
