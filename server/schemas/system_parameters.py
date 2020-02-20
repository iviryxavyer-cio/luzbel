"""
:author Luis Manuel Torres Trevino
:date 11/02/2020
:description Clase que contiene el schema de graphql para la tabla parametros del sistema
:version 1.0.0
"""
import graphene
from models.system_parameters import SystemParameters


class SystemPametersSchema(graphene.ObjectType):
    """
    SystemPametersSchema
    Clase que contiene los campos del schema de graphql para los parametros del sistema
    """

    id_parametros_sistema = graphene.Int()
    flume_delay = graphene.String()
    color_primario = graphene.String()
    color_secundario = graphene.String()


class SystemParametersInputSchema(graphene.InputObjectType):
    """
    SystemParametersInputSchema
    Clase que contiene los parametros del input schema para la modificacion de los 
    parametros del sistema.
    """

    flume_delay = graphene.String(required=True)
    color_primario = graphene.String(required=True)
    color_secundario = graphene.String(required=True)


class SystemParametersQuery:
    """
    SystemParametersQuery
    Clase que contiene las querys para obtener los parametros del sistema.
    """

    parametros = graphene.Field(SystemPametersSchema)

    @staticmethod
    def resolve_parametros(self, info):
        """
        resolve_parametros
        Funcion que busca un en la base de datos los parametros del sistema.
        """
        system_params = SystemParameters.select().get()
        return system_params


class SystemParametersUpdateMutation(graphene.Mutation):
    """
    SystemParametersUpdateMutation
    Clase que contiene la logica para modificar los parametros del sistema
    """

    class Arguments:
        id_parametros_sistema = graphene.Int(required=True)
        system_params = SystemParametersInputSchema(required=True)

    is_updated = graphene.Boolean()
    data = graphene.Field(SystemPametersSchema)

    @staticmethod
    def mutate(self, info, id_parametros_sistema, system_params):
        parms = SystemParameters.select().where(
            SystemParameters.id_parametro_sistema == id_parametros_sistema
        )
        parms.flume_delay = system_params.flume_delay
        parms.color_primario = system_params.color_primario
        parms.color_secundario = system_params.color_secundario
        try:
            parms.modificar_parametros_sistema()
            return SystemParametersMutation(data=parms, ok=True)
        except Exception:
            return SystemParametersMutation(data=None, ok=False)


class SystemParametersMutation:
    """
    SystemParametersMutation
    Clase que contiene los metodos de las mutaciones del modelo system parameters
    """
    update_system_parameters = SystemParametersUpdateMutation.Field()
