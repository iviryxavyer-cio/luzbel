import { ServidoresConstants } from '../constants/servidores.constans';
import { ServidoresService } from '../services/servidores.service';
import { modalAcciones } from './modal.actions';

export const serversActions = {
    getAllServers,
    registrar,
    modificar,
    eliminar
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

function registrar(datos){
    return (dispatch) => {
        dispatch(request())
        ServidoresService.crearServidor(datos)
            .then(
                (id) => {
                    dispatch(exito(id))
                    dispatch(getAllServers())
                    dispatch(modalAcciones.limpiar())
                    dispatch(modalAcciones.exito({titulo: 'Crear servidor', body: 'servidor creado correctamente' } ) )
                },
                (error) => {
                    dispatch(fracaso(error));
                    dispatch(modalAcciones.limpiar());
                    dispatch(modalAcciones.error({ titulo: 'Crear servidor', body: 'Error al crear un servidor'}));
                }
            )
    }

    function request(){ return { type: ServidoresConstants.REGISTRAR_SERVIDOR_REQUEST } }
    function exito(datos) { return { type:ServidoresConstants.REGISTRAR_SERVIDOR_EXITO, datos} }
    function fracaso(error) { return { type: ServidoresConstants.REGISTRAR_SERVIDOR_FRACASO, error } }
}

function modificar(datos){
    return dispatch => {
        dispatch(request());

        ServidoresService.modificarServidor(datos)
            .then(
                (id) => {
                    dispatch(exito(id))
                    dispatch(getAllServers())
                    dispatch(modalAcciones.limpiar())
                    dispatch(modalAcciones.exito({titulo: 'Modificar servidor', body: 'servidor modificado correctamente' } ) )
                },
                (error) => {
                    dispatch(fracaso(error));
                    dispatch(modalAcciones.limpiar());
                    dispatch(modalAcciones.error({ titulo: 'Modificar servidor', body: 'Error al modificar un servidor'}));
                }
            )
    }
    function request(){ return { type: ServidoresConstants.MODIFICAR_SERVIDOR_REQUEST } };
    function exito(datos){ return { type: ServidoresConstants.MODIFICAR_SERVIDOR_EXITO, datos } };
    function fracaso(error){ return { type:ServidoresConstants.MODIFICAR_SERVIDOR_FRACASO, error } };
}

function eliminar(datos){
    return dispatch => {
        dispatch(request())
        ServidoresService.eliminarServidor(datos)
            .then(
                (id) => {
                    dispatch(exito(id))
                    dispatch(getAllServers())
                    dispatch(modalAcciones.limpiar())
                    dispatch(modalAcciones.exito({titulo: 'Eliminar servidor', body: 'servidor eliminado correctamente' } ) )
                }, 
                (error) => {
                    dispatch(fracaso(error));
                    dispatch(modalAcciones.limpiar());
                    dispatch(modalAcciones.error({ titulo: 'Eliminar servidor', body: 'Error al eliminar un servidor'}));
                }
            )
    }
    function request(){ return { type: ServidoresConstants.ELIMINAR_SERVIDOR_REQUEST } };
    function exito(datos){ return { type: ServidoresConstants.ELIMINAR_SERVIDOR_EXITO, datos } };
    function fracaso(error){ return { type:ServidoresConstants.ELIMINAR_SERVIDOR_FRACASO, error } };
}
