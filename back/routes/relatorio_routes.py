from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import func

from db.database import get_db
from core.security import require_admin

from models.turma_model import Turma
from models.disciplina_model import Disciplina
from models.matricula_model import Matricula

router = APIRouter(
    prefix="/relatorios",
    tags=["Relatórios"]
)

@router.get("/turmas")
def relatorio_turmas(
    db: Session = Depends(get_db),
    usuario: dict = Depends(require_admin),
):
    relatorio = (
        db.query(
            Turma.id.label("turma_id"),
            Disciplina.nome.label("disciplina"),
            Turma.semestre,
            Turma.vagas_total,
            Turma.vagas_disponiveis,
            func.count(Matricula.id).label("matriculados")
        )
        .join(Disciplina, Turma.disciplina_id == Disciplina.id)
        .outerjoin(Matricula, Turma.id == Matricula.turma_id)
        .group_by(
            Turma.id,
            Disciplina.nome,
            Turma.semestre,
            Turma.vagas_total,
            Turma.vagas_disponiveis,
        )
        .all()
    )

    resultado = []

    for item in relatorio:
        resultado.append({
            "turma_id": item.turma_id,
            "disciplina": item.disciplina,
            "semestre": item.semestre,
            "vagas_total": item.vagas_total,
            "vagas_disponiveis": item.vagas_disponiveis,
            "matriculados": item.matriculados,
        })

    return resultado