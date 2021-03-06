from utils.conexion import psql_db
from peewee import *
from datetime import datetime
from .usuario import Usuario

class Conector(Model):
    class Meta:
        database = psql_db
        table_name = 'conectores'

    id_conector = AutoField()
    nombre_conector = CharField(max_length=60, null=False)
    url_conector = CharField(max_length=1000, null=False)
    status = CharField(default='A')
    fecha_creacion = DateTimeField(default=datetime.utcnow)
    fecha_modificacion = DateTimeField(default=datetime.utcnow)
