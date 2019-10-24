from flask import Flask
from flask_graphql import GraphQLView
from schemas.servidores_schema import SchemaServidores

from schemas.usuario_schema import schema



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

    return app


app = create_app('default')


@app.route('/api/')
def index():
    return 'CAIN'


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=3000)
