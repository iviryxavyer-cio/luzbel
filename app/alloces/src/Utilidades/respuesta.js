/**
 * @author Luis Manuel Torres Treviño
 * @date 12/11/2019
 * @description Este archivo contiene una funcion para manejar las respuestas de los servicios.
 */

import { LoginService } from '../services/login.service';

export function manejarRespuesta(respuesta) {
    debugger;
    const respuestaJson = JSON.parse(respuesta)
    console.log(respuestaJson)
    /*return respuesta.text().then(texto => {
        const datos = texto && JSON.parse(texto);
        if(!respuesta.ok) {
            if(respuesta.status === 401) {
                LoginService.logout();

                const error = (datos && datos.mensaje) || respuesta.statusText;
                return Promise.reject(error);
            }


            if(respuesta.status === 422) {
                const error = (datos && datos.errores[Object.keys(datos.errores)[0]][0]) || respuesta.statusText;
                return Promise.reject(error);
            }

            const error = (datos && datos.mensaje) || respuesta.statusText;
            return Promise.reject(error);
        }
        return datos;
    });*/
}