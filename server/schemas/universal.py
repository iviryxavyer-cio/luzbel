# -*- coding: utf-8 -*-
"""
@author Marco Gallegos 
@date 2020-02-11
@description
este archivo tiene como finalidad reunir las definiciones de querys, mutations 
de cada recurso y unirlo en un schema para exportarlo y exponerlo en una ruta
@historial

"""

import graphene
import schemas.usuario as usuariosch
import schemas.servidores as servidoressch
import schemas.conector as conectorsch
import schemas.conexiones as conexionessch
import schemas.tablasdb as tablasch
import schemas.validacion_conexiones as validacionsch
import schemas.get_columns as getcolumnssch
import schemas.parametros_pysqoop as parametrospysqoopsch

class Query(
        graphene.ObjectType, tablasch.TablaDBQuery, validacionsch.ValidacionConexionQuery,
        getcolumnssch.GetColumnsQuery, parametrospysqoopsch.ParametrosPysqoopQuery,
        usuariosch.UsuarioQuery, servidoressch.ServidoresQuery,
        conectorsch.ConectoresQuery, conexionessch.ConexionesQuery
        ):
    """Clase que abstracta para proveer querys a el schema global"""


class Mutation(
        graphene.ObjectType, parametrospysqoopsch.ParametrosPysqoopMutation,
        servidoressch.ServidoresMutations, conectorsch.ConectoresMutation,
        conexionessch.ConexionesMutation, usuariosch.UsuarioMutation
        ):
    """Mutation globales que debe implementar las mutaciones de cada recurso 
    que se tenga"""


UniversalSchema = graphene.Schema(query=Query, mutation=Mutation)