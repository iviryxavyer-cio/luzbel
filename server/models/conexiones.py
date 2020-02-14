from datetime import datetime
import peewee as pwe
from utils.conexion import psql_db


class Conexiones(pwe.Model):
    class Meta:
        database = psql_db
        table_name="conexiones"

    id_conexion = pwe.AutoField()
    id_servidor = pwe.IntegerField()
    id_conector = pwe.IntegerField()
    puerto = pwe.CharField(max_length=10)
    usuario = pwe.CharField(max_length=20)
    contrasena = pwe.CharField(max_length=150)
    bd = pwe.CharField(max_length=200)
    fecha_creacion = pwe.DateTimeField(default=datetime.utcnow)
    fecha_modificacion = pwe.DateTimeField(default=datetime.utcnow)


if __name__ == "__main__":
    print("parece que funciona bro")
