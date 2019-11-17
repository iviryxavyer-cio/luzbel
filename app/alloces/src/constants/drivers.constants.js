export const DriversConstants = {
    GET_ALL_DRIVERS_REQUEST: 'GET_ALL_DRIVERS_REQUEST',
    GET_ALL_DRIVERS_REQUEST_SUCCESS: 'GET_ALL_DRIVERS_REQUEST_SUCCESS',
    GET_ALL_DRIVERS_REQUEST_FAIL: 'GET_ALL_DRIVERS_REQUEST_FAIL',

    CREAR_CONECTORES_REQUEST: 'CREAR_CONECTORES_REQUEST',
    CREAR_CONECTORES_EXITO: 'CREAR_CONECTORES_EXITO',
    CREAR_CONECTORES_FRACASO: 'CREAR_CONECTORES_FRACASO',

    MODIFICAR_CONECTORES_REQUEST: 'MODIFICAR_CONECTORES_REQUEST',
    MODIFICAR_CONECTORES_EXITO: 'MODIFICAR_CONECTORES_EXITO',
    MODIFICAR_CONECTORES_FRACASO: 'MODIFICAR_CONECTORES_FRACASO',

    ELIMINAR_CONECTORES_REQUEST: 'ELIMINAR_CONECTORES_REQUEST',
    ELIMINAR_CONECTORES_EXITO: 'ELIMINAR_CONECTORES_EXITO',
    ELIMINAR_CONECTORES_FRACASO: 'ELIMINAR_CONECTORES_FRACASO',

    URL_CONECTORES_GRAPHQL: 'http://localhost/conector',

    QUERY_OBTENER_CONECTORES: `{
        conectores {
            idConector
            nombreConector
            urlConector
            status
        }
    }`,

    QUERY_CREAR_CONECTORES: `
        mutation CrearConector($nombreConector: String!, $urlConector: String!){
            crearConector(nombreConector: $nombreConector urlConector: $urlConector){
                conector {
                    idConector
                }
            }
        }
    `,

    //TODO: terminar modificar conector
    QUERY_MODIFICAR_CONECTORES: `
        mutation ActualizarConector($idConector: Int!){
            
        }
    `,

    QUERY_ELIMINAR_CONECTORES:`
        mutation BorrarConector($idConector: Int!){
            borrarConector(idConector: $idConector){
                conector{
                    idConector
                }
            }
        }
    `
}