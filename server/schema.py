import graphene
from model import Usuario
from collections import namedtuple

#UserValueObject = namedtuple('Usuarios_Schema', )


class Usuarios_Schema(graphene.ObjectType):
    id = graphene.Int()
    nombre_usuario = graphene.String()
    apellido_usuario = graphene.String()
    usuario = graphene.String()
    correo_usuario = graphene.String()
    telefono_usuario = graphene.String()
    status = graphene.String()


class Query(graphene.ObjectType):
    # node = graphene.relay.node.Field()
    hello = graphene.String(name=graphene.String(default_value='World'))
    usuarios = graphene.Field(Usuarios_Schema)

    def resolve_hello(self, info, name):
        return 'hello {}'.format(name)

    def resolve_usuarios(self, info):
        query = Usuario.select().get()
        print(query)

        return query


schema = graphene.Schema(query=Query)
