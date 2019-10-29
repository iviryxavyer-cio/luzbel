from .authentication import decode_token
from functools import wraps
from flask import request, abort


def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if not 'Authorization' in request.headers:
            abort(401)

        id_usuario = None
        data = request.headers['Authorization'].encode('ascii', 'ignore')
        try:
            id_usuario = decode_token(token=data)
        except:
            abort(401)

        return f(id_usuario, *args, **kwargs)
    return decorated_function