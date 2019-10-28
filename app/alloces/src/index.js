import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Generales.css'
import App from './App';
import Login from './Login'
import Servidores from './Servidores';
import Conectores from './Conectores';
import Conexiones from './Conexiones';
import './css/custom.css';
import './css/normalize.css';
import './css/prog-tracker.css';
//import Conectores from './Conectores.tsx';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Login />, document.getElementById('root'));
//ReactDOM.render(<Servidores />, document.getElementById('root'));
//ReactDOM.render(<Conectores />, document.getElementById('root'));
//ReactDOM.render(<Conexiones />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
