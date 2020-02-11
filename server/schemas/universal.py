# -*- coding: utf-8 -*-
"""
@author Marco Gallegos 
@date 2020-02-11
@description
este archivo tiene como finalidad reunir las definiciones de querys, mutations 
de cada recurso y unirlo en un schema para exportarlo y exponerlo en una ruta
"""

import graphene
import schemas.usuario_schema as usuariosch
from models.usuario import Usuario

class Query(graphene.ObjectType):
    usuario = graphene.Field(usuariosch.UsuariosSchema, id=graphene.Int())
    usuarioByUser = graphene.Field(usuariosch.UsuariosSchema, usuario=graphene.String())
    usuarios = graphene.List(usuariosch.UsuariosSchema)
    
    # inicio usuarios
    def resolve_usuario(self, info, **kwargs):
        id = kwargs.get('id')
        if id is not None:
            query = Usuario.select().where(Usuario.id_usuario == id).get()
        else:
            query = Usuario.select().get()

        return query

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


class Mutation(graphene.ObjectType):
    # inicio usuarios
    crear_usuario = usuariosch.CrearUsuarios.Field()
    modificar_usuario = usuariosch.ModificarUsuario.Field()
    login_usuario = usuariosch.LoginUsuario.Field()
    eliminar_usuario = usuariosch.UsuarioDeleteMutation.Field()
    # fin servicios


UniversalSchema = graphene.Schema(query=Query, mutation=Mutation)