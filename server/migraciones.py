from utils.conexion import psql_db
from models.servidores import Servidores
from models.usuario import Usuario
from models.conector import Conector
from models.conexiones import Conexiones
from models.parametros_pysqoop import ParametrosPysqoop
from peewee import DatabaseError


def crear_tabla(db, tabla):
    print('Creando tabla {}'.format(tabla))
    try:
        db.connect()
        db.create_tables([tabla])
        print('Tabla {} creada'.format(tabla.__name__))
    except DatabaseError as exc:
        print(exc)
    except Exception:
        print('error al crear la tabla {}'.format(tabla.__name__))
    finally:
        db.close()


def crear_tipo_status(db):
    try:
        db.connect()
        db.execute_sql("CREATE TYPE status AS ENUM ('A', 'I', 'E')")
    except DatabaseError as exc:
        print(exc)
    except Exception:
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
    except Exception:
        print("Error al alterar el campo status de la tabla {}".format(tabla))
    finally:
        db.close()


def crear_usuario_admin():
    try:
        usuario = Usuario()
        usuario.usuario = 'admin'
        usuario.nombre_usuario = 'Admin'
        usuario.apellido_usuario = 'Admin'
        usuario.contrasena = 'admin@123'
        usuario.correo_usuario = 'admin@cain.com'
        usuario.telefono_usuario = '3312758869'
        usuario.status = 'A'
        usuario.guardar()
    except Exception as e:
        print(e)


if __name__ == "__main__":
    crear_tipo_status(psql_db)
    crear_tabla(psql_db, Usuario)
    alterar_campo_status(psql_db, Usuario._meta.table_name)
    crear_tabla(psql_db, Servidores)
    alterar_campo_status(psql_db, Servidores.__name__)
    crear_tabla(psql_db, Conector)
    alterar_campo_status(psql_db, Conector._meta.table_name)
    crear_tabla(psql_db, Conexiones)
    crear_tabla(psql_db, ParametrosPysqoop)
    alterar_campo_status(psql_db, ParametrosPysqoop._meta.table_name)
    crear_usuario_admin()
