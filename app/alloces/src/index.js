import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Generales.css'
import App from './App';
import './css/custom.css';
import './css/normalize.css';
import './css/prog-tracker.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
