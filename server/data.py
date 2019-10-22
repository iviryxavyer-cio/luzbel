from model import psql_db, Usuario


def insert_data():
    psql_db.create_tables([Usuario])
    with psql_db.atomic():
        record = dict()
        record['usuario'] = 'Admin'
        record['nombre_usuario'] = 'Admin'
        record['apellido_usuario'] = 'Admin'
        record['correo_usuario'] = 'admin@ciosa.com'
        record['telefono_usuario'] = '3312758869'

        Usuario.create(**record)
    print("Done")
