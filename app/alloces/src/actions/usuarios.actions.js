import { UsersConstants } from '../constants/usuarios.constants'
import { UsuarioService } from '../services/usuarios.service';

export const usersActions = {
    getAllUsers
}

function getAllUsers() {
    return dispatch => {
        dispatch(request())

        try {
            UsuarioService.obtenerUsuarios().then((lista) => {
                dispatch(success(lista.usuarios))
            });
        }catch(error) {
            console.log(error)
        }
    }

    function request() {
        return { type: UsersConstants.GET_ALL_USERS_REQUEST }
    }
    function success(users) {
        return { type: UsersConstants.GET_ALL_USERS_REQUEST_SUCCESS, payload:users }
    }
}