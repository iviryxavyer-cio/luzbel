from flask import Flask
from flask_graphql import GraphQLView
from schemas.servidores_schema import SchemaServidores
from schemas.usuario_schema import schema
from schemas.conector_schema import SchemaConectores
from schemas.validacion_conexiones_schema import SchemaValidacionConexion
from schemas.conexiones_schema import SchemaConexiones
from schemas.tablasdb_schema import SchemaTablaDB
from utils.middleware import login_required


def create_app(config_name):
    app = Flask(__name__)
    app.config.from_object(__name__)

    # insert_data()

    # Routes (aqui se importaran las rutas de la api)
    app.add_url_rule('/graphql', view_func=GraphQLView.as_view(
        'graphql',
        schema=schema,
        graphiql=True
    ))

    # ruta para servidores GQL
    app.add_url_rule('/servidor',
         view_func=GraphQLView.as_view(
             'servidor',
             schema=SchemaServidores,
             graphiql=True
         )
     )

    # ruta para conexiones GQL
    app.add_url_rule('/conexion',
         view_func=GraphQLView.as_view(
             'conexion',
             schema=SchemaConexiones,
             graphiql=True
         )
     )

    app.add_url_rule('/conector',
         view_func=GraphQLView.as_view(
             'conector',
             schema=SchemaConectores,
             graphiql=True
         )
     )

    app.add_url_rule('/validacion',
         view_func=GraphQLView.as_view(
             'validacion',
             schema=SchemaValidacionConexion,
             graphiql=True
         )
     )

    app.add_url_rule('/tabla',
         view_func=GraphQLView.as_view(
             'tabla',
             schema=SchemaTablaDB,
             graphiql=True
         )
     )

    return app


app = create_app('default')


@app.route('/api/')
@login_required
def index():
    return 'CAIN'


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=3000)
