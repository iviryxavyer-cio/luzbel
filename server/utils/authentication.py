import jwt
import bcrypt
import logging
from datetime import datetime, timedelta
import models


def encode_auth_token(id_usuario):
    """
    Genera el token de usuario si las credenciales son correctas
    :param id_usuario: id del usuario con el cual hicieron login
    :return: token JWT
    """
    try:
        payload = {
            'exp': datetime.utcnow() + timedelta(seconds=600),
            'iat': datetime.utcnow(),
            'sub': id_usuario
        }
        return jwt.encode(payload, 'angeles', 'HS256')
    except Exception as e:
        return e


def login(user, password):
    try:
        usuario = Usuario.select().where(Usuario.usuario == user).get()
        if usuario and bcrypt.checkpw(password.encode(), usuario.contrasena.encode()):
            token = encode_auth_token(usuario.id_usuario)
        else:
            token = ''
        return token
    except Exception as e:
        return e


def decode_token(token):
    """
    Decodes the auth token
    :param token: token de autorización
    :return: id_usuario o error
    """
    try:
        payload = jwt.decode(token, 'angeles')
        return payload['sub']
    except jwt.ExpiredSignatureError:
        return 'El tiempo del token expiró.'
    except jwt.InvalidTokenError:
        return 'El token es invalido.'
