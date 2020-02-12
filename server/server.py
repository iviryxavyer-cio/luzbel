from flask import Flask
from flask_cors import CORS
from flask_graphql import GraphQLView

from schemas.parametros_pysqoop_schema import schema_parametros_pysqoop
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

    app.add_url_rule('/parametros_pysqoop',
        view_func=GraphQLView.as_view(
            'parametros_pysqoop',
            schema=schema_parametros_pysqoop,
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
