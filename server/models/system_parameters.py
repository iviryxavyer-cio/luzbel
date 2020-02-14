from datetime import datetime
from peewee import *
from utils.conexion import psql_db


class SystemParameters(Model):
    """
    SystemParameters
    Clase que hace referencia a los parametros generales del sistema
    """

    class Meta:
        """
        Meta
        Clase que contiene los metadatos de la la tabla de la tabla
        en la base de datos.
        """
        database = psql_db
        name = 'paramateros_sistema'

    id_parametro_sistema = AutoField()
    flume_delay = CharField(max_length=30, null=False, default='')
    color_primario = CharField(max_length=10, null=False, default='0F4C81')
    color_secundario = CharField(max_length=10, null=False, default='FFFFFF')
    fecha_creacion = DateTimeField(default=datetime.utcnow)
    fecha_modificacion = DateTimeField(default=datetime.utcnow)


    def modificar_parametros_sistema(self):
        """
        modificar_parametros_sistema
        Funcion que modifica la instancia de los parametros del sistema.
        """
        self.fecha_modificacion = datetime.utcnow()
        self.save()

