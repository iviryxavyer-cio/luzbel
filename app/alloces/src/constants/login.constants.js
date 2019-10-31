/**
 * Constantes para los servicios de login
 */
export const loginConstants = {
    LOGIN_USER_REQUEST: 'LOGIN_USER_REQUEST',
    LOGIN_USER_REQUEST_SUCCESS: 'LOGIN_USER_REQUEST_SUCCESS',
    LOGIN_USER_REQUEST_FAIL: 'LOGIN_USER_REQUEST_FAIL',
    LOGIN_QUERY: `mutation LoginUsuario($user: String!, $contrasena: String!) {
                    loginUsuario(user: $user contrasena: $contrasena) {
                        token
                    }
                } `,
}