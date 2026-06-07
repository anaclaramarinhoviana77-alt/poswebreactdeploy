from pydantic import BaseModel, ConfigDict, Field

#o que o cliente Envia para criar um docente
class TurmaCreate(BaseModel):
    disciplina_id: int = Field(ge=1)
    docente_id: int = Field(ge=1)
    semestre: str = Field(min_length=1, max_length=10)
    vagas_total: int = Field(ge=1)

#o que a API DEVOLVE (sem a senha!)
class TurmaResponse(BaseModel):
    id: int
    disciplina_id: int
    docente_id: int
    semestre: str
    vagas_total: int

    model_config = {"from_attributes": True}