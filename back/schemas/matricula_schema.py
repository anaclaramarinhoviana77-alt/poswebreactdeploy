from pydantic import BaseModel, ConfigDict, Field


# o que o cliente ENVIA: SÓ a turma!
class MatriculaCreate(BaseModel):
    turma_id: int = Field(ge=1)


# o que a API DEVOLVE
class MatriculaResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    aluno_id: int
    turma_id: int
    status: str