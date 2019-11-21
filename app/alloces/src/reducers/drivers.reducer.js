import { DriversConstants } from '../constants/drivers.constants';

const initialState = {
    allDrivers: []
}

export function driversReducer(state = initialState, action){
    switch(action.type){
        case DriversConstants.GET_ALL_DRIVERS_REQUEST:
            return { ...state }
        case DriversConstants.GET_ALL_DRIVERS_REQUEST_SUCCESS:
            return { ...state, allDrivers: action.payload }

        case DriversConstants.CREAR_CONECTORES_REQUEST:
            return { ...state}
        case DriversConstants.CREAR_CONECTORES_EXITO:
            return { ...state }
        case DriversConstants.CREAR_CONECTORES_FRACASO:
            return { ...state }

        case DriversConstants.MODIFICAR_CONECTORES_REQUEST:
            return {...state}
        case DriversConstants.MODIFICAR_CONECTORES_EXITO:
            return {...state}
        case DriversConstants.MODIFICAR_CONECTORES_FRACASO:
            return {...state}

        case DriversConstants.ELIMINAR_CONECTORES_REQUEST:
            return {...state}
        case DriversConstants.ELIMINAR_CONECTORES_EXITO:
            return {...state}
        case DriversConstants.ELIMINAR_CONECTORES_FRACASO:
            return {...state}
        
        default:
            return { ...state }
    }
}