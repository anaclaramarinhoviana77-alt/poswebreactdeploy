from sqlalchemy import Column, Integer, String, Date, Float, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from db.database import Base


class Matricula(Base):
    __tablename__ = "matriculas"

    id = Column(Integer, primary_key=True, index=True)
    aluno_id = Column(Integer, ForeignKey("alunos.id"), nullable=False)
    turma_id = Column(Integer, ForeignKey("turmas.id"), nullable=False)
    data_matricula = Column(Date, server_default=func.now())
    status = Column(String(20), default="ativa")
    nota_final = Column(Float, nullable=True)

    aluno = relationship("Aluno", back_populates="matriculas")
    turma = relationship("Turma", back_populates="matriculas")
