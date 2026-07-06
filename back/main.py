from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# importa todos os models pra registrar no SQLAlchemy (os relacionamentos precisam de todos)
import models.user_model
import models.aluno_model
import models.docente_model
import models.disciplina_model
import models.turma_model
import models.matricula_model

from routes import aluno_routes, auth_routes, docente_routes, me_routes, disciplina_routes, turma_routes, relatorio_routes, matricula_routes

app = FastAPI(title="API Pós-Graduação IFBA")

# CORS — libera o front-end a conversar com a API
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://djansantos.com.br",   # produção
        "http://localhost:5173",       # Vite em dev (React)
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# essa parte liga as rotas na aplicação
app.include_router(auth_routes.router)
app.include_router(aluno_routes.router)
app.include_router(docente_routes.router)
app.include_router(me_routes.router)
app.include_router(disciplina_routes.router)
app.include_router(turma_routes.router)
app.include_router(relatorio_routes.router)
app.include_router(matricula_routes.router)

@app.get("/")
def home():
    return "minha api"
