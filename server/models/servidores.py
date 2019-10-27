from datetime import datetime
from peewee import *
from utils.conexion import psql_db
from .usuario import Usuario

# para validar el input
list_status = ["A", "I", "E"]


class Servidores(Model):
    class Meta:
        database = psql_db

    id_servidor = AutoField()
    direccion = CharField(max_length=15)
    alias_servidor = CharField(max_length=70)
    status = CharField()
    fecha_creacion = DateTimeField(default=datetime.utcnow)
    fecha_modificacion = DateTimeField(default=datetime.utcnow)
    usuario_modificacion = ForeignKeyField(Usuario, backref='usuario_modificacion', lazy_load=False, null=True)


if __name__ == "__main__":
    for s in Servidores.select():
        print(f"servidor {s.id_servidor} | {s.direccion} | {s.status} | {s.alias_servidor}")
