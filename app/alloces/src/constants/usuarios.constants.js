export const UsersConstants = {
    GET_ALL_USERS_REQUEST: 'GET_ALL_USERS_REQUEST',
    GET_ALL_USERS_REQUEST_SUCCESS: 'GET_ALL_USERS_REQUEST_SUCCESS',
    GET_ALL_USERS_REQUEST_FAIL: 'GET_ALL_USERS_REQUEST_FAIL',

    REGISTRAR_USUARIOS_REQUEST: 'REGISTRAR_USUARIOS_REQUEST',
    REGISTRAR_USUARIOS_REQUEST_EXITO: 'REGISTRAR_USUARIOS_REQUEST_EXITO',
    REGISTRAR_USUARIOS_REQUEST_FALLO: 'REGISTRAR_USUARIOS_REQUEST_FALLO',

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

    QUERY_REGISTRAR_USUARIO: `mutation CrearUsuario(
        $usuario: String!,
        $nombre: String!,
        $apellido: String!,
        $correo: String!,
        $telefono: String!,
        $contrasena: String!)
    {
        crearUsuario(
            usuario: $usuario
            nombre: $nombre
            apellido: $apellido
            correo: $correo
            telefono: $telefono
            contrasena: $contrasena
        ){
            user {
                idUsuario
            }
        }
    }`
}