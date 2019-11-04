import { UsersConstants } from '../constants/usuarios.constants'

export const usersActions = {
    getAllUsers
}

function getAllUsers() {
    return dispatch => {
        dispatch(request())

        const users = [
            { usuario: 'jabc', contrasenia: '123456', nombres: 'jesus camacho', apellidos: 'briseño camacho', correo: 'jabc55@live.com' },
            { usuario: 'lmtt', contrasenia: '789012', nombres: 'luis manuel', apellidos: 'torres treviño', correo: 'lmtt@live.com' }
        ]
        
        dispatch(success(users))
    }

    function request() {
        return { type: UsersConstants.GET_ALL_USERS_REQUEST }
    }
    function success(users) {
        return { type: UsersConstants.GET_ALL_USERS_REQUEST_SUCCESS, payload:users }
    }
}