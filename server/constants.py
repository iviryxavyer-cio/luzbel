import os


APP_DIR = os.getcwd()
LOGGER_DIR = os.path.join(APP_DIR, '/logs')


# mensajes
ERROR_GRAPHQL = 'Error con la mutacion de graphql'
ERROR_PYMSSQL_20009 = 'conexion rechazada, revisar direccion y puerto del servidor.'
ERROR_PYMSSQL_18456 = 'conexion rechazada, revisar usuario, contraseña o base de datos.'
ERROR_PYMSSQL_DEFAULT = 'error de conexion no clasificado: {}.'