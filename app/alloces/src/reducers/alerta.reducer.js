/**
 * @author Luis Manuel Torres Treviño
 * @date 11/11/2019
 * @description Este archivo contiene los reducers de las acciones.
 */

import { alertaConstantes } from '../constants/alerta.constants';

/**
 *  Reducer de alerta para detectar el cambio de una parte
 *  del estado de la app (en este caso alerta) y realizar
 *  el cambio dependiendo la accion.
 * 
 * @param {Object} state estado actual de la app
 * @param {*} accion accion a tomar por el reducer
 */
export function alerta(state={}, accion){
    // verifica que cambiará dependiendo el tiempo de accion
    switch (accion.type) {
        case alertaConstantes.EXITO:
            return {...state, tipo: 'alert-success', mensaje: accion.mensaje}
        case alertaConstantes.ERROR:
            return {...state, tipo: 'alert-danger', mensaje: accion.mensaje}
        case alertaConstantes.LIMPIAR:
            return {};
        default:
            return state;
    }
}