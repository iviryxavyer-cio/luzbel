/**
 * @author Luis Manuel Torres Treviño <torrestrevino.luis@gmail.com>
 * @date 18/11/2019
 * @fileoverview Esta clase contiene los servicios para la comunicacion entre la aplicacion 
 *  con el servidor. Modelo de drivers (conectores)
 * @version 1.0.0
 * 
 * Historial
 * v.1.0.0 - Se crean los 4 principales metodos de comunicación entre el crud de conectores
 *  y la api.
 */
import { request } from 'graphql-request';
import { DriversConstants } from '../constants/drivers.constants';

/**
 * Se exporta un objeto constante llamado 'DriverService' que contiene los metodos del servicio.
 */
export const DriverService = {
    obtenerDrivers,
    registrarDrivers,
    modificarDrivers,
    eliminarDrivers
} 

/**
 * Funcion para obtener los conectores que devuelve la api
 * @return {Promise} Promesa que contiene el resultado de hacer la peticion a la api para
 *  obtener la lista de conectores.
 */
function obtenerDrivers(){
    return request(DriversConstants.URL_CONECTORES_GRAPHQL, 
        DriversConstants.QUERY_OBTENER_CONECTORES);
}

/**
 * Funcion que se encarga de mandar los datos de un nuevo conector a la api.
 * @param {Object} datos Datos del nuevo conector mandados desde su formulario.
 * @return {Promise} Promesa con el resultado de la api.
 */
function registrarDrivers(datos){
    let variables = {
        nombreConector: datos.nombre,
        urlConector: datos.url
    };
    variables = JSON.stringify(variables);
    return request(DriversConstants.URL_CONECTORES_GRAPHQL,
        DriversConstants.QUERY_CREAR_CONECTORES, variables);
}

/**
 * Funcion que se encarga de modificar el conector que se le envie por el id.
 * @param {Object} datos Datos del formulario
 * @return {Promise} Promesa con el resultado de la api
 */
function modificarDrivers(datos){
    let variables = {
        idConector: datos.idConector,
        conectorData: {
            nombreConector: datos.nombre,
            urlConector: datos.url
        }
    }
    variables = JSON.stringify(variables)
    return request(DriversConstants.URL_CONECTORES_GRAPHQL,
        DriversConstants.QUERY_MODIFICAR_CONECTORES, variables)
}

/**
 * Funcion que se encarga de hacer la peticion para eliminar un conector a la api.
 * @param {Int} idConector Id del conector que se desea eliminar
 * @return {Promise} Promesa con el resultado de la api.
 */
function eliminarDrivers(idConector){
    let variables = {
        idConector: idConector
    }
    variables = JSON.stringify(variables)
    return request(DriversConstants.URL_CONECTORES_GRAPHQL,
        DriversConstants.QUERY_ELIMINAR_CONECTORES, variables);
}