from utils.conexion import psql_db
from models.servidores import Servidores
<<<<<<< HEAD
from models.usuario import Usuario
from models.conector import Conector
=======
from models.conexiones import Conexiones
>>>>>>> 480ca269bb3b7a4f0247af8c82ddc9a231ce4407
from peewee import DatabaseError


def crear_tabla(db, tabla):
    print('Creando tabla {}'.format(tabla))
    try:
<<<<<<< HEAD
        db.connect()
        db.create_tables([tabla])
        print('Tabla {} creada'.format(tabla.__name__))
    except  DatabaseError as exc:
=======
        psql_db.create_tables([Servidores, Conexiones])
        print("tabla servidor creada")
    except DatabaseError as exc:
>>>>>>> 480ca269bb3b7a4f0247af8c82ddc9a231ce4407
        print(exc)
    except:
        print('error al crear la tabla {}'.format(tabla))
    finally:
        db.close()


def crear_tipo_status(db):
    try:
        db.connect()
        db.execute_sql("CREATE TYPE status AS ENUM ('A', 'I', 'E')")
    except DatabaseError as exc:
        print(exc)
    except Exception as e:
        print("Error al crear el tipo status")
    finally:
        db.close()


def alterar_campo_status(db, tabla):
    try:
        db.connect()
        print('Se alterará el campo de status de la tabla {}'.format(tabla))
        db.execute_sql('ALTER TABLE {} ALTER COLUMN status TYPE status using status::status'.format(tabla))
    except DatabaseError as exc:
        print(exc)
    except Exception as e:
        print("Error al alterar el campo status de la tabla {}".format(tabla))
    finally:
        db.close()

if __name__ == "__main__":
    crear_tipo_status(psql_db)

    crear_tabla(psql_db, Usuario)
    alterar_campo_status(psql_db, Usuario.__name__.lower())
    crear_tabla(psql_db, Servidores)
    alterar_campo_status(psql_db, Servidores.__name__)
    crear_tabla(psql_db, Conector)
    alterar_campo_status(psql_db, Conector)

