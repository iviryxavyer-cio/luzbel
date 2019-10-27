from peewee import *

#psql_db = PostgresqlDatabase('necronomicon', user="postgres", password="postgres", host="10.1.8.64")
# psql_db = PostgresqlDatabase('necronomicon', user="postgres", password="postgres", host="localhost")
psql_db = PostgresqlDatabase('necronomicon', user="postgres", password="postgres", host="localhost", port="5432")