/**
 * @author Marco A. Gallegos Loaeza 
 * @date 15/11/2019
 * @description Querys relacionados con el manejor de conexiones (CRUD)
 */

/**
 * Este Json contendra las funciones que retornan el query segun sea solicitado
 */
export const QueryConexiones = {

    /**
     * query para obtener cualquier servidor
     */
    conexiones(){
        return `
        {
            conexiones {
                idConexion
                idServidor
                idConector
                puerto
                usuario
                contrasena
            }
        }
        `
    },

    /**
     * Debe retornar el query para almacenar
     * 
     * @param {JSON} data 
     */
    mutationCreateConexion(data){
        return `
        mutation {
            createConexion(
                idConector:${data.idConextor}
                idServidor:${data.idServidor}
                puerto:"${data.puerto}"
                usuario:"${data.usuario}"
                contrasena:"${data.contrasena}"
            ){
                conexion {
                    idConexion
                    idServidor
                    idConector
                    puerto
                    usuario
                    contrasena
                }
            }
        }
        `
    },
}