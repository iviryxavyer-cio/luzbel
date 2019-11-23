/**
 * @author Marco A Gallegos
 * @date 19/11/2019
 * @description Este archivo contiene los servicios de las conexiones con el servidor api
 * es decir las funciones que consultaran al api
 */
import { config } from "../config";
import { request } from "graphql-request";
import { QueryConexiones } from "../graphql/conexiones"

export const ConexionesService = {
    getAllConexiones(){
        return request(config.api.url("conexion"), QueryConexiones.conexiones());
    }
}