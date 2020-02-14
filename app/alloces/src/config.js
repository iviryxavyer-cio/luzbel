export var config = {
    api:{
        /**
         * returnar la url apropiada segun el host sobre el que este corriendo la app
         */
        url(){
            var url = new URL(window.location.href);
            if (url.hostname === 'localhost' && url.port === '3000') {
                return 'http://0.0.0.0:3030/graphql';
            }
            return `http://localhost/graphql`;
        },
    }
}