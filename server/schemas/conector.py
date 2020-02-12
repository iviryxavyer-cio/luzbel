import graphene

from models.conector import Conector


class ConectoresSchema(graphene.ObjectType):
    """

    """
    id_conector = graphene.Int()
    nombre_conector = graphene.String()
    url_conector = graphene.String()
    status = graphene.String()


class ConectoresInput(graphene.InputObjectType):
    nombre_conector = graphene.String()
    url_conector = graphene.String()


class ConectorCreateMutation(graphene.Mutation):
    class Arguments:
        nombre_conector = graphene.String()
        url_conector = graphene.String()

    conector = graphene.Field(ConectoresSchema)

    @staticmethod
    def mutate(self, info, nombre_conector, url_conector):
        conector = Conector(nombre_conector=nombre_conector, url_conector=url_conector)
        conector.save()
        return ConectorCreateMutation(conector=conector)


class ConectoresDeleteMutation(graphene.Mutation):
    class Arguments:
        id_conector = graphene.Int()

    conector = graphene.Field(ConectoresSchema)

    @staticmethod
    def mutate(self, info, id_conector):
        conector = Conector.select().where(Conector.id_conector == id_conector).get()
        conector.status = 'E'
        conector.save()
        return ConectoresDeleteMutation(conector=conector)


class ConectoresUpdateMutation(graphene.Mutation):
    class Arguments:
        id_conector = graphene.Int(required=True)
        conector_data = ConectoresInput(required=True)

    conector = graphene.Field(ConectoresSchema)

    @staticmethod
    def mutate(self, info, id_conector, conector_data):
        conector = Conector.select().where(Conector.id_conector == id_conector).get()
        conector.nombre_conector = conector_data.nombre_conector
        conector.url_conector = conector_data.url_conector
        conector.save()
        return ConectoresUpdateMutation(conector=conector)


class ConectoresMutations(graphene.ObjectType):
    crearConector = ConectorCreateMutation.Field()
    borrarConector = ConectoresDeleteMutation.Field()
    actualizarConector = ConectoresUpdateMutation.Field()

