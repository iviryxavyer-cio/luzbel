"""
author: Luis Manuel Torres Treviño
date: 26/11/2019
description: Este archivo contiene el modelo de la tabla parametros_pysqoop
    y alguno de sus metodos de con interacción con la base de datos.
version: 1.0.0

historial
v.1.0.0 - Creación del modelo de parametros_pysqoop
"""

from datetime import datetime
from peewee import Model, CharField, AutoField, TextField, ForeignKeyField, DateTimeField
from utils.conexion import psql_db
from .conexiones import Conexiones


class ParametrosPysqoop(Model):
    """
    ParametrosPysqoop
    Es la clase que contendra el model de la base de datos de la tabla
    parametros_pysqoop y sus metodos.
    """

    class Meta:
        """
        Meta
        Esta clase contiene la meta informacion de la tabla en la base de
        datos.
        """
        database = psql_db  # configuracion de la base de datos
        table_name = 'parametros_pysqoop'  # nombre de la tabla

    id_parametro_pysqoop = AutoField()  # id autoincrementable de la tabla
    tabla = CharField(max_length=200, null=False)  # campo tabla
    query = TextField(null=True)  # campo query
    columnas = TextField(null=True)  # campo columnas
    id_conexion = ForeignKeyField(Conexiones, null=False,
                                  column_name='id_conexion')  # campo conexion
    status = CharField()  # campo status
    fecha_creacion = DateTimeField(
        default=datetime.utcnow)  # campo fecha_creacion
    fecha_modificacion = DateTimeField(
        default=datetime.utcnow)  # campo fechamodificacion

    @staticmethod
    def get_all_parametros_pysqoop(self):
        """
        get_all_parametros_pysqoop
        Este metodo se encarga de regresar una lista de los elementos de la tabla
        parametros_pysqoop con su join con conexiones
        """
        result = ParametrosPysqoop.select().join(Conexiones).where(
            Conexiones.id_conexion == ParametrosPysqoop.id_conexion
        )
        return result

    @staticmethod
    def get_parametro_pysqoop(self, id):
        """
        get_parametro_pysqoop
        Este metodo se encarga de regresar un elemento de la tabla de parametros_pysqoop
        con su conexion
        """
        result = ParametrosPysqoop.select().join(Conexiones).where(
            Conexiones.id_conexion == ParametrosPysqoop.id_conexion
        ).where(ParametrosPysqoop.id_parametro_pysqoop == id).get()
        return result
