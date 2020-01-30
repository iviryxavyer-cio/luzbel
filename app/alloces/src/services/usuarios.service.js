/**
 * @author Luis Manuel Torres Treviño
 * @date 11/11/2019
 * @description Este archivo contiene los servicios de los usuarios con el servidor api
 */
import { UsersConstants } from '../constants/usuarios.constants';
import { request } from 'graphql-request';

export const UsuarioService = {
    obtenerUsuarios,
    registrarUsuario,
    modificarUsuario,
    eliminarUsuario
}

/**
 * Funcion que obtiene una lista con todos los usuarios registrados
 */
function obtenerUsuarios() {
    return request(UsersConstants.URL_GRAPHQL_USUARIOS,
        UsersConstants.QUERY_GET_ALL_USERS);
}


/**
 * Esta funcion se encarga de ser el servicio de registro de nuevos usuarios.
 * @param {Object} datos datos del nuevo usuario
 */
function registrarUsuario(datos) {
    const variables = JSON.stringify(datos)
    return request(UsersConstants.URL_GRAPHQL_USUARIOS,
        UsersConstants.QUERY_REGISTRAR_USUARIO,
        variables)
        .then(respuesta => {
            return respuesta;
        })
}

function modificarUsuario(datos){
    const variables = {
        idUsuario: datos.id,
        usuarioData: {
            nombreUsuario: datos.nombre,
            apellidoUsuario: datos.apellido,
            usuario: datos.usuario,
            correoUsuario: datos.correo,
            telefonoUsuario: datos.telefono
        }
    }
    return request(UsersConstants.URL_GRAPHQL_USUARIOS, 
        UsersConstants.QUERY_MODIFICAR_USUARIO, variables)
}

function eliminarUsuario(idUsuario){
    if(!idUsuario){
        return
    }
    const variables = {
        idUsuario: idUsuario
    }
    return request(UsersConstants.URL_GRAPHQL_USUARIOS,
        UsersConstants.QUERY_ELIMINAR_USUARIO, variables)
}

