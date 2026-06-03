from sqlalchemy import Column, Integer, String, Date, ForeignKey
from sqlalchemy.orm import relationship
from db.database import Base


class Aluno(Base):
    __tablename__ = "alunos"

    id = Column(Integer, primary_key=True, index=True)
    # matricula = Column(String(20), unique=True, nullable=False) não é obrigatorio na criação do aluno, pode ser gerada posteriormente
    nome = Column(String(255), nullable=False)
    email = Column(String(255), unique=True, nullable=False)
    status = Column(String(20), default="Ativo")
    data_cadastro = Column(Date)
    usuario_id = Column(Integer, ForeignKey("usuarios.id"), nullable=True)
    cpf = Column(String(14), unique=True, nullable=False)
    data_nascimento = Column(Date, nullable=True)
    matricula = Column(String(20), unique=True, nullable=True)

    matriculas = relationship("Matricula", back_populates="aluno")
