import graphene
from utils.test_conection import testMssqlServerConection
from models.servidores import Servidores
from tabulate import tabulate


class ValidacionConexionSchema(graphene.ObjectType):
    """
    usado para definir los datos que se recuperan de un objeto(modelo peewee) tpo Servidores por GQL
    """
    status = graphene.Boolean()
    errores = graphene.String()
    data = graphene.String()


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
        print(tabulate([[id_servidor, id_conector, usuario, contrasena, puerto]], headers=["id servidor", "id conector", "usuario", "contraseña", "puerto"]))
        servidor = Servidores.select().where(Servidores.id_servidor == id_servidor).get()
        print(servidor)

        return {
            "status":False,
            "errores":"",
            "data":""
        }


SchemaValidacionConection = graphene.Schema(query=ValidacionConexionQuery)