export var config = {
    api:{
        /**
         * 
         */
        url(){
            var url = new URL(window.location.href);

            console.log(url);

            if (url.hostname === 'localhost' && url.port === 3000) {
                return 'http://0.0.0.0:3000/graphql'
            }
            return `http://localhost/graphql`;
        },
    }
}