import { conexionesConstants } from '../constants/conexiones.constants';

export const connectionsActions = {
    getAllConnections
}

function getAllConnections() {
    return dispatch => {
        dispatch(request())

        const connections = [
                {db: 'db_intranet', servidor: '10.1.1.18', usuario: 'tca', contrasenia: 'ITerp01@02', conector: 'SQL', puerto: '27010'},
                {db: 'TCADBDWH', servidor: '10.1.1.67', usuario: 'tca', contrasenia: 'ITerp01@02', conector: 'SQL', puerto: '27010'}
            ]

            dispatch(success(connections));
    }

    function request() {
        return { type: conexionesConstants.GET_ALL_CONNECTIONS_REQUEST }
    }

    function success(connectios) {
        return { type: conexionesConstants.GET_ALL_CONNECTIONS_REQUEST_SUCCESS, payload:connectios}
    }
}