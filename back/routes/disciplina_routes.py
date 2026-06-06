from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from db.database import get_db
from models.disciplina_model import Disciplina
from schemas.disciplina_schema import DisciplinaCreate, DisciplinaResponse
from core.security import require_admin

router = APIRouter(prefix="/disciplinas", tags=["Disciplinas"])


@router.post("/", response_model=DisciplinaResponse, status_code=status.HTTP_201_CREATED)
def criar_disciplina(
    dados: DisciplinaCreate,
    db: Session = Depends(get_db),
    usuario: dict = Depends(require_admin),
):
    # : codigo duplicado -> 409  # o codigo da disciplina tem que ser unico, entao se ja tiver uma disciplina com esse codigo -> erro
    existe = db.query(Disciplina).filter(Disciplina.codigo == dados.codigo).first()
    if existe:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Codigo de disciplina ja existe",
        )

    #: salva e devolve 201 # se chegou aqui, o codigo é unico, entao salva a disciplina nova no banco e devolve os dados dela (incluindo o id gerado)
    disciplina = Disciplina(**dados.model_dump())
    db.add(disciplina)
    db.commit()
    db.refresh(disciplina)
    return disciplina