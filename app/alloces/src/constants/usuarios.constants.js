export const UsersConstants = {
    GET_ALL_USERS_REQUEST: 'GET_ALL_USERS_REQUEST',
    GET_ALL_USERS_REQUEST_SUCCESS: 'GET_ALL_USERS_REQUEST_SUCCESS',
    GET_ALL_USERS_REQUEST_FAIL: 'GET_ALL_USERS_REQUEST_FAIL',

    URL_GRAPHQL_USUARIOS: 'http://localhost/graphql',
    
    QUERY_GET_ALL_USERS: `{
        usuarios {
            idUsuario
            nombreUsuario
            apellidoUsuario
            usuario
            correoUsuario
            telefonoUsuario
        }
    }`,
}