from datetime import date
from pydantic import BaseModel, ConfigDict, Field


class AlunoCreate(BaseModel):
    nome: str = Field(min_length=1)
    cpf: str = Field(min_length=11, max_length=14)
    email: str = Field(min_length=1)
    data_nascimento: date
    senha: str = Field(min_length=6)  # senha para o login do aluno (Usuario)

# o que a API DEVOLVE (sem a senha!)
class AlunoResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    nome: str
    cpf: str
    email: str
    data_nascimento: date
    status: str