import {request} from 'graphql-request'
import {loginConstants} from '../constants/login.constants'

export const LoginService = {
    login,
    logout,
};

function login(username , password) {
    const variables = {
        user: username,
        contrasena: password
    }
    return request('localhost:80/graphql', loginConstants.LOGIN_QUERY, variables)
}

function logout() {
    console.log('Se mando llamar el logout')
}


