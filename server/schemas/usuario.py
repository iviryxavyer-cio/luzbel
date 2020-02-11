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


class UsuarioInput(graphene.InputObjectType):
    nombre_usuario = graphene.String()
    apellido_usuario = graphene.String()
    usuario = graphene.String()
    correo_usuario = graphene.String()
    telefono_usuario = graphene.String()


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
        id_usuario = graphene.Int()
        usuario_data = UsuarioInput(required=True)

    ok = graphene.Boolean()
    usuario = graphene.Field(UsuariosSchema)

    def mutate(self, info, id_usuario, usuario_data):
        usuario = Usuario.select().where(Usuario.id_usuario == id_usuario).get()
        usuario.nombre_usuario = usuario_data.nombre_usuario
        usuario.apellido_usuario = usuario_data.apellido_usuario
        usuario.usuario = usuario_data.usuario
        usuario.correo_usuario = usuario_data.correo_usuario
        usuario.telefono_usuario = usuario_data.telefono_usuario
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


class UsuarioDeleteMutation(graphene.Mutation):

    class Arguments:
        id_usuario = graphene.Int()
    
    usuario = graphene.Field(UsuariosSchema)

    @staticmethod
    def mutate(self, info, id_usuario):
        usuario = Usuario.select().where(Usuario.id_usuario == id_usuario).get()
        usuario.status = 'E'
        usuario.save()
        return UsuarioDeleteMutation(usuario=usuario)
