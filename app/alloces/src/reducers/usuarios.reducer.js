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
        default:
            return { ...state }
    }
}