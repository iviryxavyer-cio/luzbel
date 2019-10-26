from peewee import *
from utils.conexion import psql_db

# para validar el input
list_status = ["A", "I", "E"]


class Servidores(Model):
    class Meta:
        database = psql_db

    id_servidor = AutoField()
    direccion = CharField(max_length=15)
    alias_servidor = CharField(max_length=70)
    status = CharField()


if __name__ == "__main__":
    for s in Servidores.select():
        print(f"servidor {s.id_servidor} | {s.direccion} | {s.status} | {s.alias_servidor}")
