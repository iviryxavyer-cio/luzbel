import {request} from 'graphql-request'
import {loginConstants} from '../constants/login.constants'
import {config} from '../config'

export const LoginService = {
    login,
    logout,
};

function login(username , password) {
    const variables = {
        user: username,
        contrasena: password
    }
    return request(config.api.url(), loginConstants.LOGIN_QUERY, variables)
}

function logout() {
    //elimina el token de localStorage para cerrar sesion    
    localStorage.removeItem('token')
}


