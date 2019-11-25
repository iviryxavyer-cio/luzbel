/**
 * @author Marco A Gallegos
 * @date 19/11/2019
 * @description Este archivo contiene la logica para hacer modificaciones al store de redux para el resource conexiones
 */
import { conexionesConstants } from '../constants/conexiones.constants';
import { ConexionesService } from "../services/conexiones.service";

export const conexionesActions = {
    getAllConexiones() {
        return dispatch => {
            dispatch(request());

            ConexionesService.getAllConexiones()
            .then((response)=>{
                dispatch(success(response.conexiones));
            }).catch((error)=>{
                dispatch(fail());
            });
        }
    
        function request()              { return { type: conexionesConstants.GET_ALL_CONNECTIONS_REQUEST } }
        function success(connections)   { return { type: conexionesConstants.GET_ALL_CONNECTIONS_REQUEST_SUCCESS, payload:connections} }
        function fail()                 { return { type: conexionesConstants.GET_ALL_CONNECTIONS_REQUEST_FAIL} }
    },
    
    storeConexion(data){
        return dispatch => {
            dispatch(request());


            
        }
        function request()              { return { type: conexionesConstants.STORE_CONNECTION_REQUEST } }
        //function success(connection)   { return { type: conexionesConstants.STORE_CONNECTION_REQUEST_SUCCESS, payload:connection} }
        //function fail()                 { return { type: conexionesConstants.STORE_CONNECTION_REQUEST_FAIL} }
    }
}
