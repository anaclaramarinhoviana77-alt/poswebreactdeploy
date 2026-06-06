from fastapi import APIRouter, Depends
from core.security import get_current_user
# rota de teste para ver o que tem dentro do token, ou seja, quem sou eu
router = APIRouter(tags=["Eu"])


@router.get("/me")
def quem_sou_eu(usuario: dict = Depends(get_current_user)):
    return usuario