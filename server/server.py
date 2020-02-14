from flask import Flask
from flask_cors import CORS
from flask_graphql import GraphQLView

from utils.middleware import login_required

# schema global
from schemas.universal import UniversalSchema


def create_app(config_name):
    app = Flask(__name__)
    app.config.from_object(__name__)
    app.config['CORS_HEADERS'] = 'Content-Type'

    # insert_data()
    
    # Routes (aqui se genera el endpoint general)
    app.add_url_rule('/graphql', view_func=GraphQLView.as_view(
            'graphql',
            schema=UniversalSchema,
            graphiql=True
        )
    )

    return app


app = create_app('default')
cors = CORS(app)


@app.route('/api/')
@login_required
def api():
    return 'CAIN'

@app.route('/')
def index():
    return 'Api Luzbel 3:D'


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=3030)
