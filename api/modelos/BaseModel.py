from peewee import PostgresqlDatabase, Model
from peewee import CharField, DateField, IntegerField, AutoField

#psql_db = PostgresqlDatabase('necronomicon', user='Saraknyal', password='cainNerve', host='10.1.8.64', port=5432)

psql_db = PostgresqlDatabase('necronomicon', user='postgres', password='postgres', host='localhost', port=5432)

# para validar el input
list_status = ["A", "I", "E"]


class ORM(Model):
    class Meta:
        database = psql_db


class Servidores(ORM):
    id_servidor = AutoField()
    direccion = CharField()
    alias_servidor = CharField()
    status = CharField()