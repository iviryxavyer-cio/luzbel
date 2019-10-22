from modelos.BaseModel import psql_db, Servidores
from peewee import DatabaseError

if __name__ == "__main__":
    psql_db.connect()
    print("creando tabla servidor")
    try:
        psql_db.create_tables([Servidores])
        print("tabla servidor creada")
    except DatabaseError as exc:
        print(exc)
    except:
        print("error al crear tabla servidor")

    try:
        psql_db.execute_sql("CREATE TYPE status AS ENUM ('A', 'I', 'E')")
    except DatabaseError as exc:
        print(exc)
    except:
        print("error en tipo enum")
    finally:
        psql_db.close()

    psql_db.connect()
    try:
        print("alterando campo en tabla servidores a status")
        psql_db.execute_sql("ALTER TABLE servidores ALTER COLUMN status TYPE status using status::status")
    except DatabaseError as exc:
        print(exc)
    except:
        print("error alterando el campo")
    finally:
        psql_db.close()