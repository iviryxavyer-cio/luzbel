import {loginConstants} from '../constants/login.constants';
import { LoginService } from '../services/login.service';

export const loginActions = {
    login
}

function login(username, password) {
    return dispatch => {
        //dispara la accion de la peticion
        dispatch(request())

        try {
            LoginService.login(username, password).then((token) => {
                console.log(token)
            if(token){
                localStorage.setItem('token', token.loginUsuario.token)
                dispatch(success(token.loginUsuario.token))
            }
            }).catch((e)=>{
                dispatch(fail())
            })
        }catch(e){
            dispatch(fail())
        }
    }

    function request(){return {type: loginConstants.LOGIN_USER_REQUEST}}
    function success(token){
        return {
            type: loginConstants.LOGIN_USER_REQUEST_SUCCESS,
            payload: token
        }
    }
    function fail(){return { type: loginConstants.LOGIN_USER_REQUEST_FAIL }}
}