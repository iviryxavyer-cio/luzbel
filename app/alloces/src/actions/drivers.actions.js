import { DriversConstants } from '../constants/drivers.constants';
import { DriverService } from '../services/drivers.service';
import { modalAcciones } from './modal.actions';

export const driversActions = {
    getAllDrivers,
    crearConector,
    modificarConector,
    eliminarConector
}

function getAllDrivers() {
    return dispatch => {
        dispatch(request())
        DriverService.obtenerDrivers()
            .then(
                (data) => {
                    dispatch(success(data))
                },
                (error) => {
                    dispatch(fail(error))
                }
            )
        dispatch(success(drivers));
    }
    function request() {
        return { type: DriversConstants.GET_ALL_DRIVERS_REQUEST }
    }

    function success(drivers) {
        return { type: DriversConstants.GET_ALL_DRIVERS_REQUEST_SUCCESS, payload:drivers }
    }

    function fail(error){ return { type: DriversConstants.GET_ALL_DRIVERS_REQUEST_FAIL, error} }
}

function crearConector(data){
    return dispatch => {
        dispatch(request)
        DriverService.crearConector(data)
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
    function request(){ return { type: DriversConstants.CREAR_CONECTORES_REQUEST } }
    function exito(data){ return { type: DriversConstants.CREAR_CONECTORES_EXITO, data } }
    function fracaso(error){ return { type: DriversConstants.CREAR_CONECTORES_FRACASO, error } }
}

function modificarConector(data){
    return dispatch => {
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


    function request(){ return { type: DriversConstants.MODIFICAR_CONECTORES_REQUEST } }
    function exito(data){ return { type: DriversConstants.MODIFICAR_CONECTORES_EXITO, data} }
    function fracaso(error){ return { type: DriversConstants.MODIFICAR_CONECTORES_FRACASO, error } }
}

function eliminarConector(idConector){
    return dispatch => {
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
    function request(){ return { type: DriversConstants.ELIMINAR_CONECTORES_REQUEST } }
    function exito(data){ return { type: DriversConstants.ELIMINAR_CONECTORES_EXITO, data}}
    function fracaso(error){ return { type:DriversConstants.ELIMINAR_CONECTORES_FRACASO, error}}
}