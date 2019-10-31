import {loginConstants} from '../constants/login.constants';

const loginInitialState = {
    token: '',
    loggedIn: false
}

/**
 * funcion para el reducer del login
 */


export default function loginReducer(state = loginInitialState, action){
    switch(action.type) {
        case loginConstants.LOGIN_USER_REQUEST:
            return {...state}
        case loginConstants.LOGIN_USER_REQUEST_SUCCESS:
            return {...state, token: action.payload, loggedIn: true}
        default:
            return {...state}
    }
}