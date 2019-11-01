import { conexionesConstants } from '../constants/conexiones.constants';

const initialState = {
    allConnections: []
}

export function connectionReducer(state = initialState, action){
    switch(action.type){
        case conexionesConstants.GET_ALL_CONNECTIONS_REQUEST:
            return { ...state }
        case conexionesConstants.GET_ALL_CONNECTIONS_REQUEST_SUCCESS:
            return { ...state, allConnections: action.payload }
        default:
            return { ...state }
    }
}