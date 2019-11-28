"""
author: Luis Manuel Torres Treviño
date: 27/11/2019
description: Este archivo contiene las clases para los schemas de graphql del modelo
    de parametros_pysqoop (querys, mutations, subscription)
version: 1.0.0

historial
v.1.0.0 - Creacion de schema, querys y subscripciones
"""
import graphene
from graphql import GraphQLError

from models.parametros_pysqoop import ParametrosPysqoop
from .conexiones_schema import ConexionesSchema

from utils.api_logger import api_logger
import constants


class ParametrosPysqoopSchema(graphene.ObjectType):
    """
    ParametrosPysqoopSchema
    Esta clase contiene la definicion de un schema graphql del modelo parametros_pysqoop
    """

    id = graphene.Int()  # id de la tabla parametros_pysqoop
    tabla = graphene.String()  # campo tabla en parametros_pysqoop
    query = graphene.String()  # campo query en parametros_pysqoop
    columnas = graphene.String()  # campo columnas en parametros_pysqoop
    status = graphene.String()  # campo status en parametros_pysqoop
    # campo conexion en parametros_pysqoop
    conexion = graphene.Field(ConexionesSchema)


class ParametrosPysqoopInput(graphene.InputObjectType):
    """
    ParametrosPysqoopInput
    Esta clase contiene la definicion de un schema para insertar datos al modelo
    parametros_pysqoop
    """
    tabla = graphene.String(required=True)
    query = graphene.String(required=False)
    columnas = graphene.String(required=False)
    status = graphene.String(required=True)
    id_conexion = graphene.Int(required=True)


class ParametrosPysqoopQuery(graphene.ObjectType):
    """
    ParametrosPysqoopQuery
    Esta clase contiene todas las querys para obtener los datos de la tabla de
    parametros_pysqoop por medio de graphql
    """
    parametros_pysqoop = graphene.List(ParametrosPysqoopSchema)
    parametro_pysqoop = graphene.Field(
        ParametrosPysqoopSchema, id=graphene.Int(required=True))

    @staticmethod
    def resolve_parametros_pysqoop(self, info):
        """
        resolve_parametros_pysqoop
        Este metodo resuelve las peticiones de información de todos los registros
        de la tabla parametros_pysqoop
        """
        resultado = ParametrosPysqoop.get_all_parametros_pysqoop()
        return resultado

    @staticmethod
    def resolve_parametro_pysqoop(self, info, id):
        return ParametrosPysqoop.get_parametro_pysqoop(id=id)


class ParametrosPysqoopCreateMutation(graphene.Mutation):
    """
    ParametrosPysqoopCreateMutation
    Esta clase contiene la logica para la creacion de un nuevo elemento de la tabla
    parametros_pysqoop
    """

    class Arguments:
        tabla = graphene.String(required=True)
        query = graphene.String(required=False)
        columnas = graphene.String(required=False)
        status = graphene.String(required=True)
        id_conexion = graphene.Int(required=True)

    parm_pysqoop = graphene.Field(ParametrosPysqoopSchema)

    @staticmethod
    def mutate(self, info, tabla, query, columnas, status, id_conexion):
        """
        mutate
        metodo que ejecuta la insertcion de los datos en la base de datos
        """
        parametros_pysqoop = ParametrosPysqoop(
            tabla=tabla, query=query, columnas=columnas,
            status=status, id_conexion=id_conexion
        )
        parametros_pysqoop.save()
        return ParametrosPysqoopCreateMutation(parm_pysqoop=parametros_pysqoop)


class ParametrosPysqoopDeleteMutation(graphene.Mutation):
    """
    ParametrosPysqoopDeleteMutation
    Clase que contiene la logica para eliminar (logico) un elemento de la tabla
    parametros_pysqoop.
    """
    class Arguments:
        id_parametro_pysqoop = graphene.Int(required=True)

    parametro_pysqoop = graphene.Field(ParametrosPysqoopSchema)

    @staticmethod
    def mutate(self, info, id_parametro_pysqoop):
        try:
            parm_pysqoop = ParametrosPysqoop.select().where(
                ParametrosPysqoop.id_parametro_pysqoop == id_parametro_pysqoop)
            parm_pysqoop.status = 'E'
            parm_pysqoop.save()
            return ParametrosPysqoopDeleteMutation(parametro_pysqoop=parm_pysqoop)
        except GraphQLError:
            api_logger.error(constants.ERROR_GRAPHQL)


class ParametrosPysqoopUpdateMutation(graphene.Mutation):
    """
    ParametrosPysqoopUpdateMutation
    Clase que contiene la logica para modificar un elemento
        de la tabla parametros_pysqoop
    """
    class Arguments:
        id_parametro_pysqoop = graphene.Int(required=True)
        parametros_pysqoop_data = ParametrosPysqoopInput(required=True)

    ok = graphene.Boolean()
    parm_pysqoop = graphene.Field(ParametrosPysqoopSchema)

    @staticmethod
    def mutate(self, info, id_parametro_pysqoop, parametros_pysqoop_data):
        parm = ParametrosPysqoop.select().where(
            ParametrosPysqoop.id_parametro_pysqoop == id_parametro_pysqoop).get()
        parm.tabla = parametros_pysqoop_data.tabla
        parm.query = parametros_pysqoop_data.query
        parm.columnas = parametros_pysqoop_data.columnas
        parm.status = parametros_pysqoop_data.status
        parm.save()
        return ParametrosPysqoopUpdateMutation(parm_pysqoop=parm, ok=True)


class ParametrosPysqoopMutation(graphene.ObjectType):
    """
    ParametrosPysqoopMutation
    Clase que contiene todas las mutaciones para el schema de parametros_pysqoop
    """
    crear_parametro_pysqoop = ParametrosPysqoopCreateMutation.Field()
    eliminar_parametro_pysqoop = ParametrosPysqoopDeleteMutation.Field()
    modificar_parametro_pysqoop = ParametrosPysqoopUpdateMutation.Field()


schema_parametros_pysqoop = graphene.Schema(
    query=ParametrosPysqoopQuery, mutation=ParametrosPysqoopMutation)
