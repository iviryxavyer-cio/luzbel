/**
 * Este archivo agrupa las rutas publicas de la aplicacion
 * @author Luis Manuel Torres Treviño
 * @date 31/10/2019
 */

//Se importan los componentes que contendran las rutas publicas
import Login from '../../pages/Sesion/Login';

//Se exporta un objeto con las rutas
export default {
    Login: {
        component: Login,
        path: '/login'
    }
}

