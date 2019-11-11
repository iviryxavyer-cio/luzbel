/**
 * @author Luis Manuel Torres Treviño
 * @date 11/11/2019
 * @description Archivo que contendra las acciones de las alertas
 * para redux.
 */

import { alertaConstantes } from '../constants/alerta.constants';

export const alertaAcciones = {
    exito,
    error,
    limpiar
};

function exito(mensaje) {
    return { type: alertaConstantes.EXITO, mensaje };
}

function error(mensaje) {
    return { type: alertaConstantes.ERROR, mensaje };
}

function limpiar() {
    return { type: alertaConstantes.LIMPIAR };
}