from peewee import *
from model import psql_db
import graphene

# para validar el input
list_status = ["A", "I", "E"]


class Servidores(Model):
    class Meta:
        database = psql_db

    id_servidor = AutoField()
    direccion = CharField()
    alias_servidor = CharField()
    status = CharField()


class ServidoresSchema(graphene.ObjectType):
    id_servidor = graphene.Int()
    direccion = graphene.String()
    alias_servidor = graphene.String()
    status = graphene.String()


class ServidoresQuery(graphene.ObjectType):
    servidores = graphene.List(ServidoresSchema)

    def resolve_servidores(self, info):
        servdidores = Servidores.select()
        return servdidores


# definimos mutacion para  crear y editar
class ServidoresCreateMutation(graphene.Mutation):
    class Arguments:
        direccion = graphene.String()
        alias_servidor = graphene.String()
        status = graphene.String()

    servidor = graphene.Field(lambda: ServidoresSchema)

    def mutate(self, info, direccion, alias_servidor, status):
        servidor = Servidores(direccion = direccion, alias_servidor=alias_servidor, status=status)
        servidor.save()
        return ServidoresCreateMutation(servidor = servidor)


class ServidoresMutations(graphene.ObjectType):
    createServidor = ServidoresCreateMutation.Field()


SchemaServidores = graphene.Schema(query=ServidoresQuery, mutation=ServidoresMutations)

if __name__ == "__main__":
    for s in Servidores.select():
        print(f"servidor {s.direccion} {s.status}")
