from model import psql_db, Usuario


def insert_data():
    psql_db.create_tables([Usuario])
    user = Usuario(usuario="Admin",
                   nombre_usuario="Admin",
                   apellido_usuario="Admin",
                   contrasena="admin123",
                   correo_usuario="admin@cain.com",
                   telefono_usuario="3312758869")
    user.guardar()
    print("Done")
