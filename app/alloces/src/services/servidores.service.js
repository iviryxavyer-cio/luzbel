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
    crearServidor
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
function crearServidor(alias, direccion){
    //Se crea un objeto que contienen las variables que serán enviadas al servidor
    //para crear un nuevo servidor en la base de datos.
    const variables = {
        aliasServidor: alias,
        direccion: direccion,
        status: "A"
    }
    return request(ServidoresConstants.URL_GRAPHQL_SERVIDORES,
        ServidoresConstants.CREATE_NEW_SERVER_QUERY,
        variables)
}