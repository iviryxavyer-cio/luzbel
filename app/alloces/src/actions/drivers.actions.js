/**
 * @author JesusAlberto Briseño Camacho <jabc55@live.com>
 * @date 21/11/2019
 * @fileoverview Funciones de la logica del crud de drivers (conectores), Mostrar, Agregar, Editar y Eliminar
 * @version 1.0.0
 * 
 * Historial
 * v.1.0.0 - Se crean los 4 principales metodos de comunicación entre el crud de conectores
 *  y la api.
 */
import { DriversConstants } from '../constants/drivers.constants';
import { DriverService } from '../services/drivers.service';
import { modalAcciones } from './modal.actions';
//Exportamos todas las acciones de los conectores
export const driversActions = {
    getAllDrivers,
    crearConector,
    modificarDrivers,
    eliminarConector
}
//Funcion que nos trae todos los Conectores de nuestra base de datos
function getAllDrivers() {
    //Peticion API
    return dispatch => {
        //Dispara la acción de la petición
        dispatch(request())
        //Petición HTTP Get
        try {
            DriverService.obtenerDrivers().then((lista) => {
                dispatch(success(lista))
            });
        }catch(error){
            dispatch(fracaso(error))
        }
    }
    //Función que regresa la acción de la petición
    function request() { return { type: DriversConstants.GET_ALL_DRIVERS_REQUEST } }
    //Función que regresa el exitó de la petición con los datos del servidor
    function success(drivers) { return { type: DriversConstants.GET_ALL_DRIVERS_REQUEST_SUCCESS, payload:drivers } }
    //Función que regresa el fracaso y el error de la petición al servidor
    function fracaso(error){ return { type: DriversConstants.GET_ALL_DRIVERS_REQUEST_FAIL, error} }
}
//Función que guarda en la base de datos el conector 
function crearConector(data){
    //Peticion API
    return dispatch => {
        //Dispara la acción de la petición 
        dispatch(request)
        DriverService.registrarDrivers(data)
            .then(
                (id) => {
                    dispatch(exito(id))
                    dispatch(getAllDrivers())
                    dispatch(modalAcciones.limpiar())
                    dispatch(modalAcciones.exito({titulo: 'Crear conector', body: 'Conector agregado correctamente'}))
                }, 
                (error) => {
                    dispatch(fracaso(error))
                    dispatch(modalAcciones.limpiar())
                    dispatch(modalAcciones.error({titulo: 'Crear conector', body: 'Error al crear el conector'}))
                }
            )
    }
    //Función que regresa la acción de la petición 
    function request(){ return { type: DriversConstants.CREAR_CONECTORES_REQUEST } }
    //Función que regresa el exitó de la petición con los datos del servidor
    function exito(data){ return { type: DriversConstants.CREAR_CONECTORES_EXITO, data } }
    //Función que regresa el fracaso y el error de la petición del servidor
    function fracaso(error){ return { type: DriversConstants.CREAR_CONECTORES_FRACASO, error } }
}
//Función para modificar el conector en la base de datos
function modificarDrivers(data){
    //Petición API
    return dispatch => {
        //Dispara la acción de la petición
        dispatch(request())
        DriverService.modificarDrivers(data)
            .then(
                (id) => {
                    dispatch(exito(id))
                    dispatch(getAllDrivers())
                    dispatch(modalAcciones.limpiar())
                    dispatch(modalAcciones.exito({titulo: 'Modificar conector', body:'El conector se modifico correctamente'}))
                },
                (error) => {
                    dispatch(fracaso(error))
                    dispatch(modalAcciones.limpiar())
                    dispatch(modalAcciones.error({titulo: 'Modificar conector', body:'Error al modificar el conector'}))
                }
            )
    }
    //Función que regresa la acción de la petición 
    function request(){ return { type: DriversConstants.MODIFICAR_CONECTORES_REQUEST } }
    //Función que regresa el exitó de la petición con los datos del servidor
    function exito(data){ return { type: DriversConstants.MODIFICAR_CONECTORES_EXITO, data} }
    //Función que regresa el fracaso y el error de la petición del servidor
    function fracaso(error){ return { type: DriversConstants.MODIFICAR_CONECTORES_FRACASO, error } }
}
//Función para eliminar el conector seleccionado
function eliminarConector(idConector){
    //Petición API
    return dispatch => {
        //Dispara la acción de la petición
        dispatch(request())
        DriverService.eliminarDrivers(idConector)
            .then(
                (id) => {
                    dispatch(exito(id))
                    dispatch(getAllDrivers())
                    dispatch(modalAcciones.limpiar())
                    dispatch(modalAcciones.exito({titulo: 'Eliminar conector', body:'El conector se eliminar correctamente'}))
                },
                (error) => {
                    dispatch(fracaso(error))
                    dispatch(modalAcciones.limpiar())
                    dispatch(modalAcciones.error({titulo: 'Eliminar conector', body:'Error al eliminar el conector'}))
                }
            )
    }
    //Función que regresa la acción de la petición 
    function request(){ return { type: DriversConstants.ELIMINAR_CONECTORES_REQUEST } }
    //Función que regresa el exitó de la petición con los datos del servidor
    function exito(data){ return { type: DriversConstants.ELIMINAR_CONECTORES_EXITO, data} }
    //Función que regresa el fracaso y el error de la petición del servidor
    function fracaso(error){ return { type:DriversConstants.ELIMINAR_CONECTORES_FRACASO, error} }
}