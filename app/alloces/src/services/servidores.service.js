/**
 * Este archivo exporta las funciones de los servicios con la api
 * @author Luis Manuel Torres Treviño
 * @date 03/11/2019
 */

//importacion de la librerias necesarias
import { request } from 'graphql-request';
import { ServidoresConstants } from '../constants/servidores.constans';

//Se exporta un objeto con las funciones de los servicios.
export const ServidoresService = {
    obtenerServidores,
    crearServidor,
    modificarServidor,
    eliminarServidor
}

/**
 * Funcion que se encarga de obtener una lista de los servidores registrados en el servidor
 */
function obtenerServidores(){
    return request(ServidoresConstants.URL_GRAPHQL_SERVIDORES,
        ServidoresConstants.GET_ALL_SERVERS_REQUEST_QUERY)
}

/**
 * Funcion que se encarga de crear un nuevo registro de servidor.
 * @param {String} alias Nombre que recibira el servidor
 * @param {String} direccion Direccion ip de la que cuenta el servidor
 */
function crearServidor(datos){
    //Se crea un objeto que contienen las variables que serán enviadas al servidor
    //para crear un nuevo servidor en la base de datos.
    const data = {
        aliasServidor: datos.alias,
        direccion: datos.direccion,
        status: 'A'
    }
    const variables = JSON.stringify(data)
    return request(ServidoresConstants.URL_GRAPHQL_SERVIDORES,
        ServidoresConstants.CREATE_NEW_SERVER_QUERY,
        variables)
}

function modificarServidor(datos){
    const variable = {
        idServidor: datos.id,
        usuarioData: {
            direccion: datos.direccion,
            aliasServidor: datos.aliasServidor,
            status: datos.status
        }
    }
    return request(ServidoresConstants.URL_GRAPHQL_SERVIDORES,
        ServidoresConstants.QUERY_MODIFICAR_SERVIDOR, variable);
}

function eliminarServidor(idServidor){
    const variables = {
        idServidor: idServidor
    }
    return request(ServidoresConstants.URL_GRAPHQL_SERVIDORES,
        ServidoresConstants.QUERY_ELIMINAR_SERVIDOR, variables);
}