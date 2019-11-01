import { ServidoresConstants } from '../constants/servidores.constans';

export const serversActions = {
    getAllServers
}

function getAllServers() {
    //Peticion API
    return dispatch => {
        //Dispara la acción de la petición
        dispatch(request())
        //Petición HTTP Get
        const servers = [
            { ip: '10.1.1.67', name: 'El 67' },
            { ip: '10.1.1.18', name: 'El 18'},
            { ip: '10.1.1.40', name: 'S'},
        ]
        //Dispara la acción de exitó de la petición
        dispatch(success(servers));
    }
    //Función que regresa la acción de la petición
    function request() {
        return { type: ServidoresConstants.GET_ALL_SERVERS_REQUEST }
    }
    //Función que regresa el exitó de la petición con los datos del servidor
    function success(servers) {
        return { type: ServidoresConstants.GET_ALL_SERVERS_REQUEST_SUCCESS, payload:servers }
    }

}
