from sqlalchemy import Column, Integer, String, Text
from sqlalchemy.orm import relationship
from db.database import Base


class Disciplina(Base):
    __tablename__ = "disciplinas"

    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String(255), nullable=False)
    ementa = Column(Text)
    carga_horaria = Column(Integer)
    link = Column(String(255), nullable=True)
    codigo = Column(String(50), unique=True, nullable=False, index=True)

    turmas = relationship("Turma", back_populates="disciplina")
