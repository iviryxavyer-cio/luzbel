/**
 * Creador: Jesús Alberto Briseño Camacho
 * Fecha: 30/10/2019
 * 
 * Reducers
 */

import { ServidoresConstants } from '../constants/servidores.constans';

const initialState = {
    allServers: []
}

export function serverReducer(state = initialState, action){
    switch(action.type){
        case ServidoresConstants.GET_ALL_SERVERS_REQUEST:
            return { ...state }
        case ServidoresConstants.GET_ALL_SERVERS_REQUEST_SUCCESS:
            return { ...state, allServers: action.payload }

        case ServidoresConstants.REGISTRAR_SERVIDOR_REQUEST:
            return { ...state }
        case ServidoresConstants.REGISTRAR_SERVIDOR_EXITO:
            return { ...state }
        case ServidoresConstants.REGISTRAR_SERVIDOR_FRACASO:
            return { ...state }

        case ServidoresConstants.MODIFICAR_SERVIDOR_REQUEST:
            return { ...state }
        case ServidoresConstants.MODIFICAR_SERVIDOR_EXITO:
            return { ...state }
        case ServidoresConstants.MODIFICAR_SERVIDOR_FRACASO:
            return { ...state }

        case ServidoresConstants.ELIMINAR_SERVIDOR_REQUEST:
            return { ...state }
        case ServidoresConstants.ELIMINAR_SERVIDOR_EXITO:
            return { ...state }
        case ServidoresConstants.ELIMINAR_SERVIDOR_FRACASO:
            return { ...state }
        
        default:
            return { ...state }
    }
}