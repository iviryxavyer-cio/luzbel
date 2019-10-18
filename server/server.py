from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from .config import config

db = SQLAlchemy()


def create_app(config_name):
    app = Flask(__name__)
    app.config.from_object(config[config_name])
    config[config_name].init_app(app)

    db.init_app(app)

    # Routes (aqui se importaran las rutas de la api)

    return app


app = create_app('default')

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=3000)