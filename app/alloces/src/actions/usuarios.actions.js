import { UsersConstants } from '../constants/usuarios.constants'
import { UsuarioService } from '../services/usuarios.service';
import { modalAcciones } from './modal.actions';

export const usersActions = {
    getAllUsers,
    registrar,
    modificar,
    eliminar
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

function registrar(datos) {
    return dispatch => {
        dispatch(peticion())
        UsuarioService.registrarUsuario(datos)
            .then(
                id => {
                    console.log(id)
                    dispatch(exito(id));
                    dispatch(getAllUsers());
                    dispatch(modalAcciones.limpiar());
                    dispatch(modalAcciones.exito({titulo: 'Usuario registrado', body: 'Usuario registrado correctamente'}));
                },
                error => {
                    console.log(error)
                    dispatch(fracaso(error));
                    dispatch(modalAcciones.limpiar());
                    dispatch(modalAcciones.error({ titulo: 'Error al registrar usuario', body: 'Error al registrar el usuario'}));
                }
            )
    }

    function peticion(){ return { type: UsersConstants.REGISTRAR_USUARIOS_REQUEST } }
    function exito(usuario){ return { type: UsersConstants.REGISTRAR_USUARIOS_REQUEST_EXITO, usuario } }
    function fracaso(error){ return { type: UsersConstants.REGISTRAR_USUARIOS_REQUEST_FALLO, error } }
}

function modificar(datos) {
    return dispatch => {
        dispatch(peticion())
        UsuarioService.modificarUsuario(datos)
            .then(
                (id) => {
                    dispatch(exito(id));
                    dispatch(getAllUsers());
                    dispatch(modalAcciones.limpiar());
                    dispatch(modalAcciones.exito({titulo: "Usuario modificado", body: "Usuario modificado correctamente"}));
                },
                (error) => {
                    dispatch(fracaso(error));
                    dispatch(modalAcciones.limpiar());
                    dispatch(modalAcciones.error({ titulo: 'Usuario modificado', body: 'Error al modificar el usuario'}));
                }
            )
    }

    function peticion(){ return { type: UsersConstants.MODIFICAR_USUARIOS_REQUEST } }
    function exito(id){ return { type: UsersConstants.MODIFICAR_USUARIOS_EXITO, id } }
    function fracaso(error) { return { type: UsersConstants.MODIFICAR_USUARIOS_FALLO, error } }
}

function eliminar(datos) {
    return dispatch => {
        dispatch(peticion())
        UsuarioService.eliminarUsuario(datos)
            .then(
                (id) => {
                    dispatch(exito(id));
                    dispatch(getAllUsers());
                    dispatch(modalAcciones.limpiar());
                    dispatch(modalAcciones.exito({titulo: "Usuario modificado", body: "Usuario modificado correctamente"}));
                }, 
                (error) => {
                    dispatch(fracaso(error));
                    dispatch(modalAcciones.limpiar());
                    dispatch(modalAcciones.error({ titulo: 'Usuario modificado', body: 'Error al modificar el usuario'}));
                }
            )
    }

    function peticion(){ return { type: UsersConstants.ELIMINAR_USUARIO_REQUEST } };
    function exito(id){ return { type: UsersConstants.ELIMINAR_USUARIO_EXITO, id } };
    function fracaso(error) { return { type: UsersConstants.ELIMINAR_USUARIO_FALLO, error } };
}