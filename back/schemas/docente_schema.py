from pydantic import BaseModel, ConfigDict, Field


# o que o cliente ENVIA pra criar um docente
class DocenteCreate(BaseModel):
    nome: str = Field(min_length=1)
    cpf: str = Field(min_length=11, max_length=14)
    titulacao: str = Field(min_length=1)
    email: str = Field(min_length=1)
    senha: str = Field(min_length=4)
    #data_nascimento: date se quisermos adicionar depois, mas não é obrigatório no modelo do docente , vai ser necessario mudar o modelo do docente para adicionar a data de nascimento, e não é algo tão importante para o docente, então deixei de fora por enquanto.


# o que a API DEVOLVE (sem a senha!)
class DocenteResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    nome: str
    cpf: str
    titulacao: str | None
    email: str
    status: str
    #data_nascimento: date