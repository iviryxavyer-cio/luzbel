/**
 * @author Marco A Gallegos
 * @date 19/11/2019
 * @description Este archivo contiene la logica para hacer modificaciones al store de redux para el resource conexiones (allConexiones)
 */
import { conexionesConstants } from '../constants/conexiones.constants';
import { ConexionesService } from "../services/conexiones.service";

export const conexionesActions = {

    /**
     * Obtener todas las conexiones activas y ponerlas en el store
     */
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
    
    /**
     * Almacenar conexion en api y recargar las conexiones 
     * @param {JSON} data json { idConector, idServidor, puerto, usuario, contrasena }
     */
    storeConexion(data){
        return dispatch => {
            dispatch(request());
            
            ConexionesService.storeConexion(data)
            .then((response)=>{
                dispatch(success());
                dispatch(this.getAllConexiones());
            })
            .catch((err)=>{
                console.log("Errores ",err);
                dispatch(fail());
            });
        }
        function request()              { return { type: conexionesConstants.STORE_CONNECTION_REQUEST } }
        function success()              { return { type: conexionesConstants.STORE_CONNECTION_REQUEST_SUCCESS} }
        function fail()                 { return { type: conexionesConstants.STORE_CONNECTION_REQUEST_FAIL} }
    },
    

    /**
     * Eliminar conexion con PK igual al parametro
     * @param {int} idConexion PK de la conexion
     */
    deleteConexion(idConexion){
        return dispatch => {
            dispatch(request());
            
            ConexionesService.deleteConexion(idConexion)
            .then((response)=>{
                dispatch(success());
                dispatch(this.getAllConexiones());
            })
            .catch((err)=>{
                console.log("Errores ",err);
                dispatch(fail());
            });
        }
        function request()              { return { type: conexionesConstants.DELETE_CONNECTION_REQUEST } }
        function success()              { return { type: conexionesConstants.DELETE_CONNECTION_REQUEST_SUCCESS} }
        function fail()                 { return { type: conexionesConstants.DELETE_CONNECTION_REQUEST_FAIL} }
    },
}
