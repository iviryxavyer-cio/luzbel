/**
 * @author Marco A. Gallegos Loaeza 
 * @date 15/11/2019
 * @description Querys relacionados con el manejor de conexiones (CRUD)
 */

/**
 * Este Json contendra las funciones que retornan el query graphql
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
     * Query para almacenar una conexion
     * 
     * @param {JSON} data 
     */
    mutationCreateConexion(data){
        return `
        mutation {
            createConexion(
                idConector:${data.idConector}
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
    
    /**
     * Query para eliminar una conexion
     * 
     * @param {int} data Pk de la conexion
     */
    mutationDeleteConexion(idConexion){
        return `
        mutation {
            deleteConexion(
                idConexion:${idConexion}
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