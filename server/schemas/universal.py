# -*- coding: utf-8 -*-
"""
@author Marco Gallegos 
@date 2020-02-11
@description
este archivo tiene como finalidad reunir las definiciones de querys, mutations 
de cada recurso y unirlo en un schema para exportarlo y exponerlo en una ruta
"""

import graphene
import schemas.usuario as usuariosch
import schemas.servidores as servidoressch
import schemas.conector as conectorsch

from models.usuario import Usuario
from models.servidores import Servidores
from models.conector import Conector

class Query(graphene.ObjectType):
    usuario = graphene.Field(usuariosch.UsuariosSchema, id=graphene.Int())
    usuarioByUser = graphene.Field(usuariosch.UsuariosSchema, usuario=graphene.String())
    usuarios = graphene.List(usuariosch.UsuariosSchema)
    
    servidores = graphene.List(servidoressch.ServidoresSchema)
    servidor = graphene.Field(servidoressch.ServidoresSchema, id_servidor=graphene.Int(required=True))
    
    conectores = graphene.List(conectorsch.ConectoresSchema)
    conector = graphene.Field(conectorsch.ConectoresSchema, id_conector=graphene.Int(required=True))
    
    
    # inicio usuarios
    def resolve_usuarios(self, info):
        users = Usuario.select().where((Usuario.status == 'A') | (Usuario.status == 'I'))
        return users

    def resolve_usuarioByUser(self, info, **kwargs):
        usuario = kwargs.get('usuario')
        if usuario is not None:
            query = Usuario.select().where(Usuario.usuario == usuario).get()
        else:
            query = Usuario.select().get()

        return query

    def resolve_usuario(self, info, id):
        query = Usuario.select().where(Usuario.id_usuario == id).get()
        if query:
            return query
        else:
            return {}
    # fin usuarios
    # inicio servidores
    def resolve_servidores(self, info):
        servdidores = Servidores.select().where(Servidores.status != "E")
        return servdidores

    def resolve_servidor(self, info, id_servidor):
        servidor = Servidores.select().where(Servidores.id_servidor == id_servidor).get()
        return servidor
    # fin servidores
    # inicio conectores
    def resolve_conectores(self, info):
        conectores = Conector.select().where(Conector.status == 'A')
        return conectores

    def resolve_conector(self, info, id_conector):
        conector = Conector.select().where(Conector.id_conector == id_conector).get()
        return conector
    # fin conectores


class Mutation(graphene.ObjectType):
    # inicio usuarios
    crear_usuario = usuariosch.CrearUsuarios.Field()
    modificar_usuario = usuariosch.ModificarUsuario.Field()
    login_usuario = usuariosch.LoginUsuario.Field()
    eliminar_usuario = usuariosch.UsuarioDeleteMutation.Field()
    # fin servicios
    # inicio servidores
    createServidor = servidoressch.ServidoresCreateMutation.Field()
    deleteServidor = servidoressch.ServidoresDeleteMutation.Field()
    updateServidor = servidoressch.ServidoresUpdateMutation.Field()
    # fin servidores
    # inicio conectores
    crearConector = conectorsch.ConectorCreateMutation.Field()
    borrarConector = conectorsch.ConectoresDeleteMutation.Field()
    actualizarConector = conectorsch.ConectoresUpdateMutation.Field()
    # fin conectores


UniversalSchema = graphene.Schema(query=Query, mutation=Mutation)