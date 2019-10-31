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
        default:
            return { ...state }
    }
}