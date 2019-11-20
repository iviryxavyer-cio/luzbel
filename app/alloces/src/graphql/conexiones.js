/**
 * @author Marco A. Gallegos Loaeza 
 * @date 15/11/2019
 * @description Querys relacionados con el manejor de conexiones (CRUD)
 */

/**
 * Este Json contendra las funciones que retornan el query segun sea solicitado
 */
export const QueryConexiones = {
    conexiones(){
        return `
        {
            servidores {
                idServidor
                direccion
                aliasServidor
                status
            }
        }
        `
    }
}