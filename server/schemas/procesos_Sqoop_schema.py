 ##
 # @author JesusAlberto Briseño Camacho <jabc55@live.com>
 # @date 27/11/2019
 # @fileoverview Esquema de procesos de Sqoop
 # @version 1.0.0
 ##

from models.procesos_Sqoop import procesos_Sqoop
import graphene

#usado para definir los datos que se recuperan de un objeto(modelo peewee) tipo procesosSqoop por GQL
class ProcesosSqoopSchema(graphene.ObjectType):
    id_procesoSqoop = graphene.Int()
    idProceso = graphene.Int()
    statusProceso = graphene.String()
    idExterno = graphene.String()
    progreso = graphene.String()
    fechaCreacion = graphene.types.datetime.DateTime()
    ultimaFechaModificacion = graphene.types.datetime.DateTime()

#usado para recibir un objeto tipo procesoSqoop como paremetro en graphql
class ProcesosSqoopInput(graphene.InputObjectType):
    idProceso = graphene.Int(required=True)
    statusProceso = graphene.String(required=True)
    idExterno = graphene.String(required=True)
    progreso = graphene.String(required=True)
    fechaCreacion = graphene.types.datetime.DateTime(required=True)
    ultimaFechaModificacion = graphene.types.datetime.DateTime(required=True)

#
class ProcesosSqoopQuery(graphene.ObjectType):
    procesosSqoop = graphene.ListServidores(ProcesosSqoopSchema)
    procesoSqoop = graphene.Field(ProcesosSqoopSchema, id_procesoSqoop=graphene.Int(required=True))

    @staticmethod
    def resolve_procesosSqoop(self, info, id_procesoSqoop):
        procesoSqoop = procesosSqoop.select().where(procesosSqoop.id_procesoSqoop == id_procesoSqoop).get()
        return procesoSqoop

#definimos la mutacion para crear, editar y eliminar
class ProcesosSqoopCreateMutation(graphene.Mutation):
    class Arguments:
        idProceso = graphene.Int()
        statusProceso = graphene.String()
        idExterno = graphene.String()
        progreso = graphene.String()
        fechaCreacion = graphene.types.datetime.DateTime()
        ultimaFechaModificacion = graphene.types.datetime.DateTime()

    procesoSqoop = graphene.Field(ProcesosSqoopSchema)

    @staticmethod
    def mutate(self, info, idProceso, statusProceso, idExterno, progreso, fechaCreacion, ultimaFechaModificacion)
        procesoSqoop = procesos_Sqoop(idProceso=idProceso, statusProceso=statusProceso, idExterno=idExterno, progreso=progreso, fechaCreacion=fechaCreacion, ultimaFechaModificacion=ultimaFechaModificacion)
        progreso.save()
        return ProcesosSqoopCreateMutation(procesoSqoop=procesoSqoop)

    class ProcesosSqoopDeleteMutation(graphene.Mutation):
        class Arguments:
            id_procesoSqoop=graphene.Int()

        procesoSqoop = graphene.Field(ProcesosSqoopSchema)

        @staticmethod
        def mutate(self, info, id_procesoSqoop):
            procesoSqoop = procesos_Sqoop.select().where(procesos_Sqoop.id_procesoSqoop == id_procesoSqoop).get()
            procesos_Sqoop.statusProceso="FAILED"
            procesos_Sqoop.save()
            return ProcesosSqoopDeleteMutation(procesos_Sqoop=procesos_Sqoop)
            
    class ProcesosSqoopUpdateMutation(graphene.Mutation):
        class Arguments:
            id_procesoSqoop = graphene.Int(required=True)
            procesoSqoop_data = ProcesosSqoopInput(required=True)

        procesoSqoop = graphene.Field(ProcesosSqoopSchema)

        @staticmethod
        def mutate(self, info, id_procesoSqoop, procesoSqoop_data):
            procesoSqoop = procesos_Sqoop.select().where(procesos_Sqoop.id_procesoSqoop == id_procesoSqoop).get()
            procesoSqoop.id_procesoSqoop = procesoSqoop_data.id_procesoSqoop
            procesoSqoop.statusProceso = procesoSqoop_data.statusProceso
            procesoSqoop.idExterno = procesoSqoop_data.idExterno
            procesoSqoop.progreso = procesoSqoop_data.progreso
            procesoSqoop.fechaCreacion = procesoSqoop_data.fechaCreacion
            procesoSqoop.ultimaFechaModificacion = procesoSqoop_data.ultimaFechaModificacion

    class ProcesosSqoopMutations(graphene.ObjectType):
        createProcesoSqoop = ProcesosSqoopCreateMutation.Field()
        deleteProcesoSqoop = ProcesosSqoopDeleteMutation.Field()
        updateProcesoSqoop = ProcesosSqoopUpdateMutation.Field()

    SchemaProcesosSqoop = graphene.Schema(query=ProcesosSqoopQuery, mutation=ProcesosSqoopMutations)