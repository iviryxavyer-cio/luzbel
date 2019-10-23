import graphene
from model import Usuario


# UserValueObject = namedtuple('Usuarios_Schema', )


class UsuariosSchema(graphene.ObjectType):
    id_usuario = graphene.Int()
    nombre_usuario = graphene.String()
    apellido_usuario = graphene.String()
    usuario = graphene.String()
    correo_usuario = graphene.String()
    telefono_usuario = graphene.String()
    status = graphene.String()
    contrasena = graphene.String()


class UsuariosMutation(graphene.Mutation):
    class Arguments:
        nombre = graphene.String()
        apellido = graphene.String()
        usuario = graphene.String()
        correo = graphene.String()
        telefono = graphene.String()
        status = graphene.String()
        contrasena = graphene.String()

    user = graphene.Field(UsuariosSchema)

    def mutate(self, info, nombre, apellido, usuario, correo, telefono, contrasena):
        user = Usuario(
            usuario=usuario,
            nombre_usuario=nombre,
            apellido_usuario=apellido,
            correo_usuario=correo,
            telefono_usuario=telefono,
            contrasena=contrasena
        )
        user.guardar()

        return UsuariosMutation(user=user)


class Query(graphene.ObjectType):
    # node = graphene.relay.node.Field()
    hello = graphene.String(name=graphene.String(default_value='World'))
    usuario = graphene.Field(UsuariosSchema, id=graphene.Int())
    usuarios = graphene.List(UsuariosSchema)

    def resolve_hello(self, info, name):
        return 'hello {}'.format(name)

    def resolve_usuario(self, info, **kwargs):
        id = kwargs.get('id')
        print(id)
        if id is not None:
            query = Usuario.select().where(Usuario.id_usuario == id).get()
        else:
            query = Usuario.select().get()

        return query

    def resolve_usuarios(self, info):
        users = Usuario.select()
        return users


class Mutation(graphene.ObjectType):
    crear_usuario = UsuariosMutation.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
