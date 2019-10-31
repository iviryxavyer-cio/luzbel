import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/Generales.css'
import App from './App';
import './css/custom.css';
import './css/normalize.css';
import './css/prog-tracker.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'

//TODO: borrar esto
import Login from "./pages/Login";

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Login />, document.getElementById('root'));
serviceWorker.unregister();
