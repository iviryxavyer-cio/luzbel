from ..models.usuario import Usuario
from .authentication import decode_token


class LoginMidddleware(object):
    """
    Esta clase representa el middleware de inicio de sesion
    validara el token jwt y permitira la obtencion de informacion o regresará un error
    """

    def __init__(self, app):
        self.app = app

    def __call__(self, environ, start_response):
        if self._authenticated(environ.get('HTTP_AUTHORIZATION')):
            return self.app(environ, start_response)
        return self.login(environ, start_response)


    def _authenticated(self, header):
        if not header:
            return False
        _, token = header.split(None, 1)
        decode = decode_token(token=token)
