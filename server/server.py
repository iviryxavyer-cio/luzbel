from flask import Flask
from flask_cors import CORS
from flask_graphql import GraphQLView
from schemas.conector_schema import SchemaConectores
from schemas.validacion_conexiones_schema import SchemaValidacionConexion
from schemas.conexiones_schema import SchemaConexiones
from schemas.tablasdb_schema import SchemaTablaDB
from schemas.parametros_pysqoop_schema import schema_parametros_pysqoop
from schemas.get_columns_schema import schema_columns
from utils.middleware import login_required

# schema global
from schemas.universal import UniversalSchema


def create_app(config_name):
    app = Flask(__name__)
    app.config.from_object(__name__)
    app.config['CORS_HEADERS'] = 'Content-Type'

    # insert_data()
    
    # Routes (aqui se importaran las rutas de la api)
    app.add_url_rule('/graphql', view_func=GraphQLView.as_view(
        'graphql',
        schema=UniversalSchema,
        graphiql=True
    ))

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

    app.add_url_rule('/parametros_pysqoop',
        view_func=GraphQLView.as_view(
            'parametros_pysqoop',
            schema=schema_parametros_pysqoop,
            graphiql=True
        )
    )
    
    app.add_url_rule('/columnas',
         view_func=GraphQLView.as_view(
            'columnas',
            schema=schema_columns,
            graphiql=True
        )
    )

    return app


app = create_app('default')
cors = CORS(app)


@app.route('/api/')
@login_required
def index():
    return 'CAIN'


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=3000)
