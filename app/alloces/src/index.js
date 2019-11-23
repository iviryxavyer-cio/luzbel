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

import {store} from './store';


ReactDOM.render(
    <Provider store={store}><App /></Provider>
    , document.getElementById('root'));
serviceWorker.unregister();
