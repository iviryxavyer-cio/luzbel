from peewee import PostgresqlDatabase

# psql_db = PostgresqlDatabase(
#    'necronomicon', user="postgres", password="postgres", host="10.1.8.8")
psql_db = PostgresqlDatabase(
    'necronomicon', user="postgres", password="postgres", host="localhost", port=5432)
# psql_db = PostgresqlDatabase(
#    'necronomicon', user="postgres", password="postgres", host="postgres", port=5432)
