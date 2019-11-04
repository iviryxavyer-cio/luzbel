import graphene
import utils.test_conexion as testc
from models.servidores import Servidores
from models.conector import Conector
from tabulate import tabulate


class ValidacionConexionSchema(graphene.ObjectType):
    """
    usado para definir los datos que se recuperan de un objeto(modelo peewee) tpo Servidores por GQL
    """
    status = graphene.Boolean()
    error = graphene.String()
    data = graphene.List(graphene.String)


class ValidacionConexionInput(graphene.InputObjectType):
    """
    usado para recibir los paeametros de prueba 
    """
    id_servidor = graphene.Int(required=True)
    id_conector = graphene.Int(required=True)
    usuario = graphene.String(required=True)
    contrasena = graphene.String(required=True)
    puerto = graphene.Int(required=True)


class ValidacionConexionQuery(graphene.ObjectType):
    validacion = graphene.Field(
        ValidacionConexionSchema,
        id_servidor=graphene.Int(required=True),
        id_conector = graphene.Int(required=True),
        usuario = graphene.String(required=True),
        contrasena = graphene.String(required=True),
        puerto = graphene.Int(required=True)
    )

    @staticmethod
    def resolve_validacion(self, info, id_servidor, id_conector, usuario, contrasena, puerto):
        response = {
            "status":False,
            "error":"",
            "data":""
        }
        # print(tabulate([[id_servidor, id_conector, usuario, contrasena, puerto]], headers=["id servidor", "id conector", "usuario", "contraseña", "puerto"]))
        try:
            servidor = Servidores.select().where(Servidores.id_servidor == id_servidor).get()
        except:
            response["error"] = f"no se encontro el servidor con id {id_servidor}"
            servidor = None

        try:
            conector = Conector.select().where(Conector.id_conector == id_conector).get()
        except:
            response["error"] = f"no se encontro el conector con id {id_conector}"
            conector = None

        if servidor and conector:
            tipoConector = testc.limpiarStringTipoServidor(conector.nombre_conector)

            if tipoConector == "mssql" or tipoConector == "sqlserver":
                response = testc.testMssqlServerConection(host=servidor.direccion, user=usuario, password=contrasena, port=puerto)
            elif tipoConector == "postgres" or tipoConector=="postgresql":
                response["error"] = "aun no implementado el soporte para postgres"
            elif tipoConector == "mariadb" or tipoConector=="mysql" or tipoConector=="maria" or tipoConector=="percona" or tipoConector=="perconaserver":
                response["error"] = "aun no implementado el soporte para MySQL y compatibles"
            elif tipoConector == "mongo" or tipoConector=="mongodb":
                response["error"] = "aun no implementado el soporte para mongodb"
            elif tipoConector == "cassandra" or tipoConector=="casandra" or tipoConector=="apachecasandra":
                response["error"] = "aun no implementado el soporte para apache cassandra"
            else:
                response["error"] = "tipo de conector no soportado"


        # print(response)
        return response


SchemaValidacionConexion = graphene.Schema(query=ValidacionConexionQuery)