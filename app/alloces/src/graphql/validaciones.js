/**
 * @author Marco A. Gallegos Loaeza 
 * @date 17/11/2019
 * @description Querys relacionados con el manejo de validaciones a servidores
 */

/**
 * Este Json contendra las funciones que retornan el query segun sea solicitado
 */
export const QueryValidaciones = {

    /**
     * query para validar una conexion
     */
    validacion(data){
        return `
        {
            validacion(
                idServidor:${data.idServidor}
                idConector:${data.idConector}
                usuario:"${data.usuario}",
                contrasena:"${data.contrasena}"
                puerto:${data.puerto}
            ) {
                status
                error
                data
            }
        }
        `
    },
}