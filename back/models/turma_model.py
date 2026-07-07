from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from db.database import Base


class Turma(Base):
    __tablename__ = "turmas"

    id = Column(Integer, primary_key=True, index=True)
    disciplina_id = Column(Integer, ForeignKey("disciplinas.id"), nullable=False)
    docente_id = Column(Integer, ForeignKey("docentes.id"), nullable=False)
    semestre = Column(String(10), nullable=False)
    vagas_total = Column(Integer, nullable=False)
    codigo = Column(String(50), unique=True, nullable=False, index=True)
    #adição de vagas disponiveis para turma
    vagas_disponiveis = Column(Integer, nullable=False)
    disciplina = relationship("Disciplina", back_populates="turmas")
    docente = relationship("Docente", back_populates="turmas")
    matriculas = relationship("Matricula", back_populates="turma")
