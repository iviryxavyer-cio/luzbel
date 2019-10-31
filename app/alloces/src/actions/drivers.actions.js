import { DriversConstants } from '../constants/drivers.constants';

export const driversActions = {
    getAllDrivers
}

function getAllDrivers() {
    return dispatch => {
        dispatch(request())

        const drivers = [
                {nombre: 'SQL', url: 'SDASQLS'},
                {nombre: 'MONGODB', url: 'MONDBADB'},
                {nombre: 'MYSQL', url: 'MSDASQL'}
        ]

        dispatch(success(drivers));
    }
    function request() {
        return { type: DriversConstants.GET_ALL_DRIVERS_REQUEST }
    }

    function success(drivers) {
        return { type: DriversConstants.GET_ALL_DRIVERS_REQUEST_SUCCESS, payload:drivers }
    }
}