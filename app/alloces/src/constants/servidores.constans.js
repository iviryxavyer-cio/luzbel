/**
 * Creador: Jesús Alberto Briseño Camacho
 * Fecha: 30/10/2019
 * 
 * Constants
 */

//Constantes de Servidores
export const ServidoresConstants = {
    GET_ALL_SERVERS_REQUEST: 'GET_ALL_SERVER_REQUEST',
    GET_ALL_SERVERS_REQUEST_SUCCESS: 'GET_ALL_SERVERS_REQUEST_SUCCESS',
    GET_ALL_SERVERS_REQUEST_FAIL: 'GET_ALL_SERVERS_REQUEST_FAIL',

    REGISTRAR_SERVIDOR_REQUEST: 'REGISTRAR_SERVIDOR_REQUEST',
    REGISTRAR_SERVIDOR_EXITO: 'REGISTRAR_SERVIDOR_EXITO',
    REGISTRAR_SERVIDOR_FRACASO: 'REGISTRAR_SERVIDOR_FRACASO',

    MODIFICAR_SERVIDOR_REQUEST: 'MODIFICAR_SERVIDOR_REQUEST',
    MODIFICAR_SERVIDOR_EXITO: 'MODIFICAR_SERVIDOR_EXITO',
    MODIFICAR_SERVIDOR_FRACASO: 'MODIFICAR_SERVIDOR_FRACASO',

    ELIMINAR_SERVIDOR_REQUEST: 'ELIMINAR_SERVIDOR_REQUEST',
    ELIMINAR_SERVIDOR_EXITO: 'ELIMINAR_SERVIDOR_EXITO',
    ELIMINAR_SERVIDOR_FRACASO: 'ELIMINAR_SERVIDOR_FRACASO',

    GET_ALL_SERVERS_REQUEST_QUERY: `{
        servidores {
            idServidor
            direccion
            aliasServidor
            status
        }
    }`,

    CREATE_NEW_SERVER_QUERY: `mutation CrearServidor(
            $aliasServidor: String!, 
            $direccion: String!, 
            $status: String!)
        {
            createServidor(
                aliasServidor: $aliasServidor
                direccion: $direccion
                status: $status
            ){
                servidor{
                    idServidor
                }
            }
    }`,

    QUERY_MODIFICAR_SERVIDOR: `mutation UpdateServidor(
        $idServidor: Int!, $servidorData: ServidoresInput!){
            updateServidor(
                idServidor: $idServidor
                servidorData: $servidorData
            ){
                servidor{
                    idServidor
                }
            }
        }`,

    QUERY_ELIMINAR_SERVIDOR: `mutation DeleteServidor($idServidor: Int!){
        deleteServidor(idServidor: $idServidor){
            servidor{
                idServidor
            }
        }
    }`,


    URL_GRAPHQL_SERVIDORES: 'http://localhost/servidor',
}