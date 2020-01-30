import { UsersConstants } from '../constants/usuarios.constants'

const initialState = {
    allUsers: []
}

export function usersReducers(state = initialState, action){
    switch(action.type){
        case UsersConstants.GET_ALL_USERS_REQUEST:
            return { ...state }
        case UsersConstants.GET_ALL_USERS_REQUEST_SUCCESS:
            return { ...state, allUsers: action.payload }

        case UsersConstants.REGISTRAR_USUARIOS_REQUEST:
            return {...state}
        case UsersConstants.REGISTRAR_USUARIOS_REQUEST_EXITO:
            return {...state}
        case UsersConstants.REGISTRAR_USUARIOS_REQUEST_FALLO:
            return {...state}

        case UsersConstants.MODIFICAR_USUARIOS_REQUEST:
            return {...state}
        case UsersConstants.MODIFICAR_USUARIOS_EXITO:
            return {...state}
        case UsersConstants.MODIFICAR_USUARIOS_FALLO:
            return {...state}

        case UsersConstants.ELIMINAR_USUARIO_REQUEST:
            return {...state}
        case UsersConstants.ELIMINAR_USUARIO_EXITO:
            return {...state}
        case UsersConstants.ELIMINAR_USUARIO_FALLO:
            return {...state}
        
        default:
            return { ...state }
    }
}