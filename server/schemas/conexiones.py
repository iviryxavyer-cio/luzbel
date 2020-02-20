from models.conexiones import Conexiones
import graphene

# usado para definir los datos que se recuperan de un objeto(modelo peewee) tpo Servidores por GQL


class ConexionesSchema(graphene.ObjectType):
    id_conexion = graphene.Int()
    id_servidor = graphene.Int()
    id_conector = graphene.Int()
    puerto = graphene.String()
    usuario = graphene.String()
    contrasena = graphene.String()
    bd = graphene.String()


# usado para recibir un objeto tipo servidor como parametro en graphql
class ConexionesInput(graphene.InputObjectType):
    id_servidor = graphene.Int(required=True)
    id_conector = graphene.Int(required=True)
    puerto = graphene.String(required=True)
    usuario = graphene.String(required=True)
    contrasena = graphene.String(required=True)
    bd = graphene.String(required=True)


# definimos mutacion para  crear, editar y eliminar
class ConexionesCreateMutation(graphene.Mutation):
    class Arguments:
        id_servidor = graphene.Int(required=True)
        id_conector = graphene.Int(required=True)
        puerto = graphene.String(required=True)
        usuario = graphene.String(required=True)
        contrasena = graphene.String(required=True)
        bd = graphene.String(required=True)

    conexion = graphene.Field(ConexionesSchema)

    @staticmethod
    def mutate(self, info, id_servidor, id_conector, puerto, usuario, contrasena, bd):
        modelo = Conexiones(id_servidor=id_servidor, id_conector=id_conector, puerto=puerto, usuario=usuario, contrasena=contrasena, bd=bd)
        modelo.save()
        return ConexionesCreateMutation(conexion=modelo)


class ConexionesDeleteMutation(graphene.Mutation):
    class Arguments:
        id_conexion = graphene.Int(required=True)

    conexion = graphene.Field(ConexionesSchema)

    @staticmethod
    def mutate(self, info, id_conexion):
        try:
            modelo = Conexiones.select().where(Conexiones.id_conexion == id_conexion).get()
            modelo.delete_instance()
        except:
            pass
        return {}


class ConexionesUpdateMutation(graphene.Mutation):
    class Arguments:
        id_conexion = graphene.Int(required=True)
        conexion_data = ConexionesInput(required=True)

    conexion = graphene.Field(ConexionesSchema)

    @staticmethod
    def mutate(self, info, id_conexion, conexion_data):
        modelo = Conexiones.select().where(Conexiones.id_conexion == id_conexion).get()
        modelo.id_servidor = conexion_data.id_servidor
        modelo.id_conector = conexion_data.id_conector
        modelo.puerto = conexion_data.puerto
        modelo.usuario = conexion_data.usuario
        modelo.contrasena = conexion_data.contrasena
        modelo.bd = conexion_data.bd
        modelo.save()
        return ConexionesUpdateMutation(conexion=modelo)

class ConexionesQuery():
    conexiones = graphene.List(ConexionesSchema)
    conexion = graphene.Field(
        ConexionesSchema, id_conexion=graphene.Int(required=True))

    def resolve_conexiones(self, info):
        result = Conexiones.select()
        return result

    def resolve_conexion(self, info, id_conexion):
        result = Conexiones.select().where(Conexiones.id_servidor == id_conexion).get()
        return result

class ConexionesMutation():
    createConexion = ConexionesCreateMutation.Field()
    deleteConexion = ConexionesDeleteMutation.Field()
    updateConexion = ConexionesUpdateMutation.Field()