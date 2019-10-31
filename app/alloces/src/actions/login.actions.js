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
            console.log(username)
            console.log(password)
            LoginService.login(username, password).then((token) => {
                console.log(token)
            /*if(token){
                dispatch(success(token))
            }*/
            }).catch((e)=>{
                console.log(e)
            })
        }catch(e){
            console.log(e)
        }
    }

    function request(){return {type: loginConstants.LOGIN_USER_REQUEST}}
    function success(token){
        return {
            type: loginConstants.LOGIN_USER_REQUEST_SUCCESS,
            payload: token
        }
    }
}