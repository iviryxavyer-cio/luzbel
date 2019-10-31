import { loginConstants } from '../constants/login.constants';
import { LoginService } from '../services/login.service';

export const loginActions = {
    login
}

/**
 * Esta funcion se encarga de realizar el login con el servidor de la api consumiendo 
 * el servicio de loginService.
 * @param {string} username nombre de usuario en el sistema
 * @param {string} password contraseña del usuario en el sistema
 */
function login(username, password) {
    return dispatch => {
        //dispara la accion de la peticion
        dispatch(request())

        //Segmento Try/Catch que ejecuta el servicio de login.
        try {
            //Se usa el metodo login del loginService pasandole las credenciales desde el formulario
            LoginService.login(username, password).then((token) => {

                //Si la el servicio no tuvo errores entonces guarda el token en el localStorage y hace un dispatch
                //a la accion de success donde se le pasa el el token de usuario
                if (token) {
                    localStorage.setItem('token', token.loginUsuario.token)
                    dispatch(success(token.loginUsuario.token))
                }
            })
            //Si hay un error, hace un dispatch con la funcion de error
        } catch (e) {
            dispatch(fail())
        }
    }

    /**
     * funcion request
     * regresa un objeto para el dispatch request
     */
    function request() { return { type: loginConstants.LOGIN_USER_REQUEST } }
    /**
     * funcion success
     * regresa un objeto con el typo de reduce de success y un payload con la cadena de token
     * @param {string} token Cadena de token de usuario
     */
    function success(token) {
        return {
            type: loginConstants.LOGIN_USER_REQUEST_SUCCESS,
            payload: token
        }
    }
    /**
     * funcion fail
     * regresa un objeto con el tipo de reduce de fail
     */
    function fail() { return { type: loginConstants.LOGIN_USER_REQUEST_FAIL } }
}