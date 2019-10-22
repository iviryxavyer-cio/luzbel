from modelos.BaseModel import psql_db, Servidores

if __name__ == "__main__":
    psql_db.connect()
    print("creando tabla servidor")
    try:
        psql_db.create_tables([Servidores])
        print("tabla servidor creada")
    except:
        print("error al crear tabla servidor")
