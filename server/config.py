import os

basedir = os.path.abspath(os.path.dirname(__file__))


class Config():
    SECRET_KEY = 'secreto'  # TODO: pensar en otra palabra secreta

    @staticmethod
    def init_app(app):
        pass


class DevelopmentConfig(Config):
    Debug = True
    DB_USER = 'Saraknyal'
    DB_PASSWORD = 'cainNerve'
    DB_HOST = 'cain_nerve' # 10.1.8.64
    DB_PORT = 5432
    DB_NAME = 'necronomicon'
    SQLALCHEMY_DATABASE_URI = 'postgresql://' + DB_USER + ':' + DB_PASSWORD + '@' + DB_HOST + ':' \
                              + str(DB_PORT) + '/' + DB_NAME


config = {
    'develop': DevelopmentConfig,
    'default': DevelopmentConfig
}