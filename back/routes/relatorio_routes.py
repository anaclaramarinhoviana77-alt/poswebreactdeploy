from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from db.database import get_db
from core.security import require_admin

router = APIRouter(
    prefix="/relatorios",
    tags=["Relatórios"]
)

@router.get("/turmas")
def relatorio_turmas(
    db: Session = Depends(get_db),
    usuario: dict = Depends(require_admin),
):
    return []