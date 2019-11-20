import { conexionesConstants } from '../constants/conexiones.constants';

export const connectionsActions = {
    
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
    
        function Fail(connections) { return { type: conexionesConstants.GET_ALL_CONNECTIONS_REQUEST_FAIL} }
    }
}
