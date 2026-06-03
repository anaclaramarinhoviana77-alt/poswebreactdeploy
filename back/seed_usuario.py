from db.database import SessionLocal
from models.user_model import Usuario
from core.security import hash_password

db = SessionLocal()

if not db.query(Usuario).filter_by(email="admin@ifba.edu.br").first():
    db.add(Usuario(
        email="admin@ifba.edu.br",
        senha_hash=hash_password("admin123"),
        role="admin",
    ))
    db.commit()
    print("Usuario de teste criado -> email: admin@ifba.edu.br | senha: admin123")
else:
    print("Usuario de teste ja existe")

db.close()
