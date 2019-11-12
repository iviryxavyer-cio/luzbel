import { modalConstants } from '../constants/modal.constants';

export function modal(state = {}, accion) {
    switch(accion.type) {
        case modalConstants.ABRIR_FORMULARIO:
            return {
                ...state,
                mostrar: true,
                titulo: accion.formulario.titulo,
                formulario: accion.formulario.campos,
                tamanio: accion.formulario.tamanio
            }
        case modalConstants.EXITO:
            return {
                ...state,
                mostrar: true,
                titulo: accion.modal.titulo,
                body: accion.modal.body
            }
        case modalConstants.ALERTA:
            return {
                ...state,
                mostrar: true,
                titulo: accion.modal.titulo,
                body: accion.modal.body
            }
        case modalConstants.ERROR:
            return {
                ...state,
                mostrar: true,
                titulo: accion.modal.titulo,
                body: accion.modal.body,
            }
        case modalConstants.LIMPIAR:
            return {
                ...state,
                mostrar: false,
                titulo: null,
                formulario: null,
                tamanio: null,
                body: null
            }
        default:
            return state;
    }
}