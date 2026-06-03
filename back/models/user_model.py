from sqlalchemy import Column, Integer, String, Boolean, DateTime
from sqlalchemy.sql import func
from db.database import Base

class Usuario(Base):
    __tablename__ = "usuarios"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), unique=True, nullable=False, index=True)
    senha_hash = Column(String(255), nullable=False)
    role = Column(String(20), nullable=False)   # estudante | docente | admin
    ativo = Column(Boolean, default=True)
    criado_em = Column(DateTime, server_default=func.now())