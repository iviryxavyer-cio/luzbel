import graphene
import utils.getTables as getTables
import utils.test_conexion as testc
from models.servidores import Servidores
from models.conector import Conector
from models.conexiones import Conexiones
from tabulate import tabulate


class TablaDBSchema(graphene.ObjectType):
    """
    usado para definir los datos que se recuperan
    """
    status = graphene.Boolean()
    error = graphene.String()
    data = graphene.List(graphene.String)


class TablaDBQuery(graphene.ObjectType):
    tablas = graphene.Field(
        TablaDBSchema,
        id_conexion=graphene.Int(required=True),
        database=graphene.String(required=True)
    )

    @staticmethod
    def resolve_tablas(self, info, id_conexion: int, database: str):
        response = {
            "status": False,
            "error": "",
            "data": ""
        }
        try:
            conexion = Conexiones.select().where(Conexiones.id_conexion == id_conexion).get()
        except:
            response["error"] = f"no se encontro la conexion con id {id_conexion}"
            conexion = None

        if conexion:
            try:
                servidor = Servidores.select().where(
                    Servidores.id_servidor == conexion.id_servidor).get()
            except:
                response["error"] = f"no se encontro el servidor con id : {conexion.id_servidor} proveniente de la conexion : {conexion.id_conexion}"
                servidor = None

            try:
                conector = Conector.select().where(
                    Conector.id_conector == conexion.id_conector).get()
            except:
                response["error"] = f"no se encontro el conector con id {conexion.id_conector} proveniente de la conexion : {conexion.id_conexion}"
                conector = None

            if servidor and conector:
                tipoConector = testc.limpiarStringTipoServidor(
                    conector.nombre_conector)

                if tipoConector == "mssql" or tipoConector == "sqlserver":
                    response = getTables.getMssqlTables(
                        host=servidor.direccion,
                        user=conexion.usuario,
                        password=conexion.contrasena,
                        port=conexion.puerto,
                        db=database
                    )
                elif tipoConector == "postgres" or tipoConector == "postgresql":
                    response["error"] = "aun no implementado el soporte para postgres"
                elif tipoConector == "mariadb" or tipoConector == "mysql" or tipoConector == "maria" or tipoConector == "percona" or tipoConector == "perconaserver":
                    response["error"] = "aun no implementado el soporte para MySQL y compatibles"
                elif tipoConector == "mongo" or tipoConector == "mongodb":
                    response["error"] = "aun no implementado el soporte para mongodb"
                elif tipoConector == "cassandra" or tipoConector == "casandra" or tipoConector == "apachecasandra":
                    response["error"] = "aun no implementado el soporte para apache cassandra"
                else:
                    response["error"] = "tipo de conector no soportado"
            else:
                pass
        else:
            response["error"] = f"no se encontro la conexion con id : {id_conexion}"

        # print(response)
        return response


SchemaTablaDB = graphene.Schema(query=TablaDBQuery)
