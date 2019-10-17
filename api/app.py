from flask import Flask

app = Flask(__name__)

@app.route('/api')
def hello_world():
    return 'Hey, ola culeros!'

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=3000)