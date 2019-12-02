"""
author: Luis Manuel Torres Treviño
date: 02/12/2019
description: Este archivo contiene la definición del schema para obtener 
    las columnas de una tabla
version: 1.0.0

historial
v.1.0.0 - Creacion de la query para consulta de las columnas
"""
import graphene

import utils.getColumns as getColumns
import constants
from models.servidores import Servidores
from models.conexiones import Conexiones
from models.conector import Conector
from utils.api_logger import api_logger


class GetColumnsSchema(graphene.ObjectType):
    """GetColumnsSchema
    Esta clase contiene la defición del esquema que recupera el cliente.
    """
    status = graphene.Boolean()
    error = graphene.String()
    data = graphene.List(graphene.String)


class GetColumnsQuery(graphene.ObjectType):
    """GetColumnsQuery
    Esta clase contiene la definición de los metodos query 
        para que el cliente obtenga información de la api, asi como sus resolves 
    """
    get_columns = graphene.Field(GetColumnsSchema,
                                 host=graphene.String(required=True),
                                 user=graphene.String(required=True),
                                 password=graphene.String(required=True),
                                 port=graphene.String(required=True),
                                 database_name=graphene.String(required=True),
                                 table_name=graphene.String(required=True)
                                 )
    get_columns_by_id_conection = graphene.Field(GetColumnsSchema,
                                                 id_conection=graphene.Int(
                                                     required=True),
                                                 table_name=graphene.String(
                                                     required=True)
                                                 )

    @staticmethod
    def resolve_get_columns(self, info, host, user,
                            password, port, database_name, table_name):
        """resolve_get_columns
        Este metodo se encarga de resolver una petición que manda el cliente 
            para obtener las columnas de la tabla que solicitan

        Args:
            self (GetColumnsQuery): instancia del objete con el cual se esta 
                llamando este metodo.
            info (Object): informacion de la request.
            host (String): direccion ip del servidor de la base de datos.
            user (String): usuario de la base de datos.
            password (String): contraseña de la base de datos.
            port (String): puerto del servidor de base de datos.
            database_name (String): nombre de la base de datos.
            table_name (String): nombre de la tabla de la base de datos.

        Returns:
            status (Bool): Estado de la peticion. (True o False).
            error (String): Mensaje de error lanzado por el metodo.
            data (List): lista con cada uno de las columnas de la tabla.
        """
        response = {
            "status": False,
            "error": '',
            "data": ''
        }

        response = getColumns.get_columns(
            host=host, user=user, password=password,
            port=port, db=database_name, table=table_name
        )

        return response

    @staticmethod
    def resolve_get_columns_by_id_conection(self, info, id_conection, table_name):
        """get_columns_by_id_conection
        Este metodo se encarga de resolver una petición que manda el 
            cliente cuando solo se le envia el id de una conexion.

        Args:
            self (GetColumnsQuery): instancia del objeto con el cual se esta 
                llamando este metodo.
            info (Object): informacion de la request.
            id_conection (Int): id de la conexion previamente registrada 
                en la base de datos.
            table_name (String): nombre de la tabla de la base de datos.

        Returns:
            status (Bool): Estado de la peticion. (True o False).
            error (String): Mensaje de error lanzado por el metodo.
            data (List): lista con cada uno de las columnas de la tabla.
        """
        response = {
            "status": False,
            "error": '',
            "data": ''
        }

        try:
            conection = Conexiones.select().where(
                Conexiones.id_conexion == id_conection).get()
        except:
            response["error"] = constants.ERROR_CONECTIONS_DEFAULT.format(
                id_conection)
            api_logger.error(response["error"])
            conection = None

        if conection:
            try:
                server = Servidores.select().where(
                    Servidores.id_servidor == conection.id_servidor).get()
            except:
                response["error"] = constants.ERROR_SERVERS_DEFAULT.format(
                    conection.id_servidor)
                api_logger.error(response["error"])
                server = None

            try:
                conector = Conector.select().where(
                    Conector.id_conector == conection.id_conector).get()
            except:
                response["error"] = constants.ERROR_CONECTOR_DEFAULT.format(
                    conection.id_conector)
                api_logger.error(response["error"])
                conector = None

        if server and conector:
            pass