/**
 * @author Marco A Gallegos
 * @date 19/11/2019
 * @description Este archivo contiene la logica para obtener hacer modificaciones al store de redux para el resource conexiiones
 */
import { conexionesConstants } from '../constants/conexiones.constants';
import { conexionesActions } from "../actions/conexiones.actions";

export const ConexionesService = {

    getAllConnections() {
        return dispatch => {
            dispatch(request());
            let connections = [];
    
            //request(config.api.url("servidor"))
    
    
            //QueryServidores.servidores();
    
            dispatch(success(connections));
        }
    
        function request() { return { type: conexionesConstants.GET_ALL_CONNECTIONS_REQUEST } }
        function success(connections) { return { type: conexionesConstants.GET_ALL_CONNECTIONS_REQUEST_SUCCESS, payload:connections} }
        function fail(connections) { return { type: conexionesConstants.GET_ALL_CONNECTIONS_REQUEST_FAIL} }
    }
}