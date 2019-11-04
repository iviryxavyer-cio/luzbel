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
                    direccion
                    aliasServidor
                }
            }
    }`,
    URL_GRAPHQL_SERVIDORES: 'http://localhost/servidor',
}