import graphene
from models.usuario import Usuario
from utils.authentication import login


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


class CrearUsuarios(graphene.Mutation):
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

        return CrearUsuarios(user=user)


class ModificarUsuario(graphene.Mutation):
    """Metodo para modificar usuarios"""

    class Arguments:
        id = graphene.Int()
        contrasena = graphene.String()

    ok = graphene.Boolean()
    usuario = graphene.Field(UsuariosSchema)

    def mutate(self, info, id, contrasena):
        usuario = Usuario.select().where(Usuario.id_usuario == id).get()
        usuario.contrasena = contrasena
        usuario.modificar()
        return ModificarUsuario(usuario=usuario, ok=True)


class LoginUsuario(graphene.Mutation):
    class Arguments:
        user = graphene.String()
        contrasena = graphene.String()

    token = graphene.String()

    def mutate(self, info, **kwargs):
        usuario = kwargs.get('user')
        password = kwargs.get('contrasena')
        if usuario is not None and password is not None:
            token = login(usuario, password)
        else:
            token = "El usuario y/o contraseña son incorrectos"

        return LoginUsuario(token=token)


class Query(graphene.ObjectType):
    # node = graphene.relay.node.Field()
    hello = graphene.String(name=graphene.String(default_value='World'))
    usuario = graphene.Field(UsuariosSchema, id=graphene.Int())
    usuarioByUser = graphene.Field(UsuariosSchema, usuario=graphene.String())
    usuarios = graphene.List(UsuariosSchema)
    def resolve_hello(self, info, name):
        print(name)
        return 'hello {}'.format(name)

    def resolve_usuario(self, info, **kwargs):
        id = kwargs.get('id')
        if id is not None:
            query = Usuario.select().where(Usuario.id_usuario == id).get()
        else:
            query = Usuario.select().get()

        return query

    def resolve_usuarios(self, info):
        users = Usuario.select()
        return users

    def resolve_usuarioByUser(self, info, **kwargs):
        usuario = kwargs.get('usuario')
        if usuario is not None:
            query = Usuario.select().where(Usuario.usuario == usuario).get()
        else:
            query = Usuario.select().get()

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


class Mutation(graphene.ObjectType):
    crear_usuario = CrearUsuarios.Field()
    modificar_usuario = ModificarUsuario.Field()
    login_usuario = LoginUsuario.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
