import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/Generales.css'
import App from './App';
import './css/custom.css';
import './css/normalize.css';
import './css/prog-tracker.css';
import * as serviceWorker from './serviceWorker';
//import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

import { Provider } from 'react-redux';
import { store } from './store';

//componentes ara liberias globales
import { request } from 'graphql-request'
import { config } from "./config";

//librerias/constantes para uso global
window.config = config;
window.lodash = require("lodash");
window.graphqlRequest = request;

ReactDOM.render(
    <Provider store={store}><App /></Provider>
    , document.getElementById('root'));
serviceWorker.unregister();
