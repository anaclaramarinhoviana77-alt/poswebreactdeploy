from pydantic import BaseModel, ConfigDict


# o que o cliente ENVIA pra criar um aluno (sem id — o banco gera)
class AlunoCreate(BaseModel):
    matricula: str
    nome: str
    email: str
    status: str = "Ativo"


# o que a API DEVOLVE (inclui o id gerado)
class AlunoResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)  # permite criar a partir do objeto SQLAlchemy

    id: int
    matricula: str
    nome: str
    email: str
    status: str
