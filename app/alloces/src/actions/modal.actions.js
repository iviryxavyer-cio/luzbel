import {modalConstants} from '../constants/modal.constants';

export const modalAcciones = {
    exito,
    error,
    formulario,
    limpiar,
    alerta
}

function formulario(formulario) {
    return {
        type: modalConstants.ABRIR_FORMULARIO,
        formulario
    }
}

function exito(modal){
    return { type: modalConstants.EXITO, modal }
}

function alerta(modal) {
    return { type: modalConstants.ALERTA, modal }
}

function error(modal) {
    return { type: modalConstants.ERROR, modal }
}

function limpiar() {
    return { type: modalConstants.LIMPIAR };
}