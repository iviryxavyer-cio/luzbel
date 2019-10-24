from peewee import *
from model import psql_db
import graphene

# para validar el input
list_status = ["A", "I", "E"]


class Servidores(Model):
    class Meta:
        database = psql_db

    id_servidor = AutoField()
    direccion = CharField(max_length=15)
    alias_servidor = CharField(max_length=70)
    status = CharField()


# usado para definir los datos que se recuperan de un objeto(modelo peewee) tpo Servidores por GQL
class ServidoresSchema(graphene.ObjectType):
    id_servidor = graphene.Int()
    direccion = graphene.String()
    alias_servidor = graphene.String()
    status = graphene.String()


# usado para recibir un objeto tipo servidor como parametro en graphql
class ServidoresInput(graphene.InputObjectType):
    direccion = graphene.String(required=True)
    alias_servidor = graphene.String(required=True)
    status = graphene.String(required=True)


class ServidoresQuery(graphene.ObjectType):
    servidores = graphene.List(ServidoresSchema)
    servidor = graphene.Field(ServidoresSchema, id_servidor=graphene.Int(required=True))

    @staticmethod
    def resolve_servidores(self, info):
        servdidores = Servidores.select().where(Servidores.status != "E")
        return servdidores

    @staticmethod
    def resolve_servidor(self, info, id_servidor):
        servidor = Servidores.select().where(Servidores.id_servidor == id_servidor).get()
        return servidor


# definimos mutacion para  crear, editar y eliminar
class ServidoresCreateMutation(graphene.Mutation):
    class Arguments:
        direccion = graphene.String()
        alias_servidor = graphene.String()
        status = graphene.String()

    servidor = graphene.Field(ServidoresSchema)

    @staticmethod
    def mutate(self, info, direccion, alias_servidor, status):
        servidor = Servidores(direccion = direccion, alias_servidor=alias_servidor, status=status)
        servidor.save()
        return ServidoresCreateMutation(servidor = servidor)


class ServidoresDeleteMutation(graphene.Mutation):
    class Arguments:
        id_servidor=graphene.Int()

    servidor = graphene.Field(ServidoresSchema)

    @staticmethod
    def mutate(self, info, id_servidor):
        servidor = Servidores.select().where(Servidores.id_servidor == id_servidor).get()
        servidor.status = "E"
        servidor.save()
        return ServidoresDeleteMutation(servidor=servidor)


class ServidoresUpdateMutation(graphene.Mutation):
    class Arguments:
        id_servidor = graphene.Int(required=True)
        servidor_data = ServidoresInput(required=True)

    servidor = graphene.Field(ServidoresSchema)

    @staticmethod
    def mutate(self, info, id_servidor, servidor_data):
        servidor = Servidores.select().where(Servidores.id_servidor == id_servidor).get()
        servidor.direccion = servidor_data.direccion
        servidor.alias_servidor = servidor_data.alias_servidor
        servidor.status = servidor_data.status
        servidor.save()
        return ServidoresUpdateMutation(servidor=servidor)


class ServidoresMutations(graphene.ObjectType):
    createServidor = ServidoresCreateMutation.Field()
    deleteServidor = ServidoresDeleteMutation.Field()
    updateServidor = ServidoresUpdateMutation.Field()


SchemaServidores = graphene.Schema(query=ServidoresQuery, mutation=ServidoresMutations)

if __name__ == "__main__":
    for s in Servidores.select():
        print(f"servidor {s.id_servidor} | {s.direccion} | {s.status} | {s.alias_servidor}")
