import graphene
from model import Usuario
from collections import namedtuple

#UserValueObject = namedtuple('Usuarios_Schema', )


class Usuarios_Schema(graphene.ObjectType):
    id_usuario = graphene.Int()
    nombre_usuario = graphene.String()
    apellido_usuario = graphene.String()
    usuario = graphene.String()
    correo_usuario = graphene.String()
    telefono_usuario = graphene.String()
    status = graphene.String()


class Query(graphene.ObjectType):
    # node = graphene.relay.node.Field()
    hello = graphene.String(name=graphene.String(default_value='World'))
    usuarios = graphene.List(Usuarios_Schema)
    usuario = graphene.Field(Usuarios_Schema, id=graphene.Int(default_value=1))

    def resolve_hello(self, info, name):
        print(name)
        return 'hello {}'.format(name)

    def resolve_usuarios(self, info):
        query = Usuario.select()
        return query

    #def resolve_usuario(self, info, **kwargs):
    #    id = kwargs.get('id')
    #    print(id)
    #    query = Usuario.select().get()
    #    return query

    def resolve_usuario(self, info, id):
        print(id)
        query = Usuario.select().where(Usuario.id_usuario == id).get()
        if query:
            return query
        else:
            return {}


schema = graphene.Schema(query=Query)
