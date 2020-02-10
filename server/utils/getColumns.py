"""
author: Luis Manuel Torres Treviño
date: 01/12/2019
description: Este archivo contiene un metodo para obtener una lista con las columnas
    de una tabla seleccionada
version: 1.0.0

historial
    v.1.0.0 - Creación del metodo get_columns
"""
import pymssql

from utils.api_logger import api_logger
import constants


def get_columns(host: str = "localhost", user: str = "admin", password: str = "admin",
                port: str = "1443", db: str = "", table: str = ""):
    """get_columns.

    Este metodo se encarga de obtener las columnas de una tabla.

    Args:
        host (string): direccion ip del servidor de base de datos.
        user (string): usuario de la base de datos.
        password (string): contraseña de la base de datos.
        port (string): puerto del servidor de base de datos.
        db (string): nombre de la base de datos.
        table (string): nombre de la tabla de la base de datos.

    Returns:
        list: lista con las columnas de la tabla proporcionada.
    """
    conection = None
    response = {
        "status": False,
        "error": "",
        "data": []
    }

    try:
        conection = pymssql.connect(
            server=host, user=user, password=password, port=port, database=db)
    except pymssql.Error as pymssql_error:
        error_message = ""
        error_code = pymssql_error.args[0][0]

        if error_code == 20009:
            error_message = constants.ERROR_PYMSSQL_20009
            api_logger.error(error_message)
        elif error_message == 18456:
            error_message = constants.ERROR_PYMSSQL_18456
            api_logger.error(error_message)
        else:
            error_message = constants.ERROR_PYMSSQL_DEFAULT.format(
                pymssql_error.args[0][1])
            
            api_logger.error(error_message)
        response["error"] = error_message + str(pymssql_error.args[0][1])

    if conection:
        cursor = conection.cursor()

        try:
            cursor.execute(
                f'''SELECT column_name
                    FROM {db}.INFORMATION_SCHEMA.COLUMNS
                        WHERE table_name = '{table}'
                '''
            )
            response["status"] = True
        except pymssql.Error as sql_error:
            error_message = sql_error.args[1]
            api_logger.error(error_message)
           
            response["error"] = f"{error_message}"

        if response["status"]:
            data = cursor.fetchall()
            for row in data:
                response["data"].append(row[0])

        conection.close()

    return response
