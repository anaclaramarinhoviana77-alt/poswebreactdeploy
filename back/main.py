from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

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


@app.get("/")
def home():
    return "minha api"
