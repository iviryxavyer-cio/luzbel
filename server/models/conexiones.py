from peewee import *
from utils.conexion import psql_db

class Conexiones(Model):
    class Meta:
        database = psql_db

    id_conexion = AutoField()
    id_servidor = IntegerField()
    id_conector = IntegerField()
    puerto = CharField(max_length=10)
    usuario = CharField(max_length=20)
    contrasena = CharField(max_length=150)


if __name__ == "__main__":
    print("parece que funciona bro")
