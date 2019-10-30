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
    errores = graphene.String()
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
            "errores":"",
            "data":""
        }
        # print(tabulate([[id_servidor, id_conector, usuario, contrasena, puerto]], headers=["id servidor", "id conector", "usuario", "contraseña", "puerto"]))
        try:
            servidor = Servidores.select().where(Servidores.id_servidor == id_servidor).get()
        except:
            response["errores"] = f"no se encontro el servidor con id {id_servidor}"
            servidor = None

        try:
            conector = Conector.select().where(Conector.id_conector == id_conector).get()
        except:
            response["errores"] = f"no se encontro el conector con id {id_conector}"
            conector = None

        if servidor and conector:
            # falta la logica de decision sobre que db validar segun el conector
            validacion = testc.testMssqlServerConection(host=servidor.direccion, user=usuario, password=contrasena)
            response = validacion

        # print(response)
        return response


SchemaValidacionConexion = graphene.Schema(query=ValidacionConexionQuery)