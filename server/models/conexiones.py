from datetime import datetime
from peewee import *
from utils.conexion import psql_db
from .usuario import Usuario
from .servidores import Servidores
from .conector import Conector


class Conexiones(Model):
    class Meta:
        database = psql_db

    id_conexion = AutoField()
    id_servidor = IntegerField()
    id_conector = IntegerField()
    puerto = CharField(max_length=10)
    usuario = CharField(max_length=20)
    contrasena = CharField(max_length=150)
    bd = CharField(max_length=200)
    fecha_creacion = DateTimeField(default=datetime.utcnow)
    fecha_modificacion = DateTimeField(default=datetime.utcnow)


if __name__ == "__main__":
    print("parece que funciona bro")
