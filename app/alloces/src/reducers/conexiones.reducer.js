import { conexionesConstants } from '../constants/conexiones.constants';

const initialState = {
    allConexiones: []
}

export function conexionesReducer(state = initialState, action){
    switch(action.type){
        case conexionesConstants.GET_ALL_CONNECTIONS_REQUEST:
            return { ...state }
        case conexionesConstants.GET_ALL_CONNECTIONS_REQUEST_SUCCESS:
            return { ...state, allConexiones: action.payload }
        case conexionesConstants.STORE_CONNECTION_REQUEST:
            return { ...state }
        // el default atiende todas las constantes que no modifican pero no sirven para debugear
        default:
            return { ...state }
    }
}