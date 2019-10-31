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
        default:
            return { ...state }
    }
}