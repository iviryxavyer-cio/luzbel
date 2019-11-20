import { DriversConstants } from '../constants/drivers.constants';
import { DriverService } from '../services/drivers.service';

export const driversActions = {
    getAllDrivers
}

function getAllDrivers() {
    return dispatch => {
        dispatch(request())
        
        dispatch(success(drivers));
    }
    function request() {
        return { type: DriversConstants.GET_ALL_DRIVERS_REQUEST }
    }

    function success(drivers) {
        return { type: DriversConstants.GET_ALL_DRIVERS_REQUEST_SUCCESS, payload:drivers }
    }
}