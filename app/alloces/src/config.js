export const config = {
    api:{
        //se hace a traves de una funcion para poder regresar 
        url(url){
            return `localhost:8000/${url}`;
        }
    }
}