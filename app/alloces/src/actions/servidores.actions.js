import { ServidoresConstants } from '../constants/servidores.constans';
import { ServidoresService } from '../services/servidores.service';

export const serversActions = {
    getAllServers
}

function getAllServers() {
    //Peticion API
    return dispatch => {
        //Dispara la acción de la petición
        dispatch(request())
        //Petición HTTP Get
        try {
            ServidoresService.obtenerServidores().then((lista) => {
                dispatch(success(lista))
            });
        }catch(error){
            console.log(error)
        }
    }
    //Función que regresa la acción de la petición
    function request() {
        return { type: ServidoresConstants.GET_ALL_SERVERS_REQUEST }
    }
    //Función que regresa el exitó de la petición con los datos del servidor
    function success(servers) {
        return { type: ServidoresConstants.GET_ALL_SERVERS_REQUEST_SUCCESS, payload:servers.servidores }
    }

}
