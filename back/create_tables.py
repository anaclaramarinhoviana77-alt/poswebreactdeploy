from db.database import Base, engine

# importe cada model aqui conforme for criando
import models.user_model
import models.aluno_model
import models.docente_model
import models.disciplina_model
import models.turma_model
import models.matricula_model

Base.metadata.create_all(bind=engine)
print("Tabelas criadas!")