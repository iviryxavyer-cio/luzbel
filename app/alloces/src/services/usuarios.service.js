/**
 * @author Luis Manuel Torres Treviño
 * @date 11/11/2019
 * @description Este archivo contiene los servicios de los usuarios con el servidor api
 */
import { UsersConstants } from '../constants/usuarios.constants';
import { request } from 'graphql-request';

export const UsuarioService = {
    obtenerUsuarios
}

/**
 * Funcion que obtiene una lista con todos los usuarios registrados
 */
function obtenerUsuarios() {
    return request(UsersConstants.URL_GRAPHQL_USUARIOS,
        UsersConstants.QUERY_GET_ALL_USERS);
}