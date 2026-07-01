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

    total_vagas = 0
    total_matriculados = 0
    total_ociosas = 0
    detalhes_turma = []

    for item in relatorio:
        total_vagas += item.vagas_total
        total_matriculados += item.matriculados
        total_ociosas += item.vagas_disponiveis

        #calcular a porcentagem de ocupação da turma
        ocupacao_turma =  (item.matriculados / item.vagas_total) * 100 if item.vagas_total > 0 else 0.0


        detalhes_turma.append({
            "turma_id": item.turma_id,
            "disciplina": item.disciplina,
            "semestre": item.semestre,
            "vagas_total": item.vagas_total,
            "vagas_disponiveis": item.vagas_disponiveis,
            "matriculados": item.matriculados,
            "percentual_ocupacao": round(ocupacao_turma, 2)
        })

        taxa_ocupacao_geral = (total_matriculados / total_vagas) * 100 if total_vagas > 0 else 0.0

    return {
        "total_turmas": len(relatorio),
        "vagas_totais_ofertadas": total_vagas,
        "total_matriculados": total_matriculados,
        "total_vagas_ociosas": total_ociosas,
        "taxa_de_ocupacao_geral": taxa_ocupacao_geral,
        "detalhes_por_turma": detalhes_turma,
    }