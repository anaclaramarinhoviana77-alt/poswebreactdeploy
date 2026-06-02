from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from db.database import Base


class Docente(Base):
    __tablename__ = "docentes"

    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String(255), nullable=False)
    email = Column(String(255), unique=True, nullable=False)
    status = Column(String(20), default="Ativo")
    usuario_id = Column(Integer, ForeignKey("usuarios.id"), nullable=True)

    turmas = relationship("Turma", back_populates="docente")
