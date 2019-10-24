from datetime import datetime
import bcrypt
from peewee import *
from utils import decode_token

psql_db = PostgresqlDatabase('necronomicon', user="postgres", password="", host="postgres", port=5432)


class Usuario(Model):
    class Meta:
        database = psql_db
        table_name = 'usuarios'

    id_usuario = PrimaryKeyField(null=False)
    usuario = CharField(max_length=30, null=False, unique=True)
    contrasena = CharField()
    nombre_usuario = CharField(max_length=60, null=False)
    apellido_usuario = CharField(max_length=60, null=False)
    correo_usuario = CharField(max_length=120, null=False)
    telefono_usuario = CharField(max_length=10, null=False)
    status = CharField(max_length=1, default='I')
    fecha_creacion = DateTimeField(default=datetime.utcnow)
    fecha_modificacion = DateTimeField(default=datetime.utcnow)
    usuario_modificacion = ForeignKeyField('self', backref='usuario_modificacion', default=1)

    @property
    def serialize(self):
        data = {
            'id': self.id_usuario,
            'nombre_usuario': self.nombre_usuario,
            'apellido_usuario': self.apellido_usuario,
            'usuario': self.usuario,
            'correo': self.correo_usuario,
            'telefono_usuario': self.telefono_usuario,
            'status': self.status,
        }
        return data

    def __repr__(self):
        return "{}, {}, {}, {}, {}, {}, {}".format(self.id_usuario, self.nombre_usuario, self.apellido_usuario,
                                                   self.usuario, self.correo_usuario, self.telefono_usuario,
                                                   self.status)

    def guardar(self):
        salt = bcrypt.gensalt()
        self.contrasena = bcrypt.hashpw(self.contrasena.encode('utf8'), salt)
        self.save()

    def modificar(self):
        salt = bcrypt.gensalt()
        self.contrasena = bcrypt.hashpw(self.contrasena.encode('utf8'), salt)
        self.save()

"""
class Conector(Model):
    class Meta:
        database = psql_db
        table_name = 'conectores'
        
    id_conector = PrimaryKeyField(null=False)
    nombre_conector = CharField(max_length=60, null=False)
    url_conector = CharField(max_length=1000, null=False)
    status = CharField(max_length=1, default='A')
    fecha_creacion = DateTimeField(default=datetime.utcnow)
    fecha_modificacion = DateTimeField(default=datetime.utcnow)
    usuario_modificacion = ForeignKeyField('usuarios', backref='usuario_modificacion', default=1)

    @property
    def serialize(self):
        data = {
            'id_conector': self.id_conector,
            'nombre_conector': self.nombre_conector,
            'url_conector': self.url_conector,
            'status': self.status
        }
        return data

    def __repr__(self):
        return '{}, {}, {}, {}'.format(self.id_conector, self.nombre_conector, self.url_conector, self.status)

    def modificar(self, token):
        try:
            user = decode_token(token)
            self.usuario_modificacion = user
            self.fecha_modificacion = datetime.utcnow()
            self.save()
            return True
        except Exception as e:
            return e

    def elimiar(self, token):
        try:
            user = decode_token(token)
            self.usuario_modificacion = user
            self.fecha_modificacion = datetime.utcnow()
            self.status = 'E'
            self.save()
            return True
        except Exception as e:
            return e
"""
