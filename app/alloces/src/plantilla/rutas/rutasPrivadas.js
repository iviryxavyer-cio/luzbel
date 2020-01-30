/**
 * Este archivo contendran los componentes y las rutas de las rutas publicas del sistema
 * @author Luis Manuel Torres Treviño
 * @date 31/10/2019
 */

 //Se importan los componentes de las rutas.
import Servidores from '../../pages/catalogos/servidores/Servidores';
import Conectores from "../../pages/catalogos/conectores/Conectores";
import Conexiones from "../../pages/Conexiones";
import Usuarios from "../../pages/catalogos/usuarios/Usuarios";
import Home from "../../pages/home";
import MonitorProcesos from "../../pages/catalogos/procesos/MonitorProcesos";

export default {
    Servidores: {
        component: Servidores,
        path: '/servidores'
    },
    Conectores: {
        component: Conectores,
        path: '/conectores'
    },
    Conexiones: {
        component: Conexiones,
        path: '/conexiones'
    },
    Home: {
        component: Home,
        path: '/'
    },
    Usuarios: {
        component: Usuarios,
        path: '/usuarios'
    },
    MonitorProcesos: {
        component: MonitorProcesos,
        path: '/MonitorProcesos'

    },
};