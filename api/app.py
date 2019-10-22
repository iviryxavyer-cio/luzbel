from flask import Flask
from modelos.BaseModel import psql_db, Servidores
from datetime import date

app = Flask(__name__)


@app.route('/api')
def hello_world():
    return 'Hey, ola culeros!'


# en caso de ejecutarlo como principal ejecutamos el servidor y las migraciones
if __name__ == '__main__':

    Servidores.create(direccion="127.0.0.1", alias_servidor="marco " + str(date.today()), birthday=date(1940, 1, 1)
                      , status="A")

    app.run(debug=True, host='127.0.0.1', port=3000)

