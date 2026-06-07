from pydantic import BaseModel, ConfigDict, Field


# o que o cliente ENVIA pra criar (sem id — o banco gera)
class DisciplinaCreate(BaseModel):
    nome: str = Field(min_length=2)
    codigo: str = Field(min_length=2)
    carga_horaria: int = Field(gt=0)
    ementa: str | None = None


# o que a API DEVOLVE (com o id gerado)
class DisciplinaResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    nome: str
    codigo: str
    carga_horaria: int
    ementa: str | None = None