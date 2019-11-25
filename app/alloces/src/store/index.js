import { createStore, applyMiddleware, compose } from 'redux';

//importar librerias async/await y logger
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducers from '../reducers';

//crear logger middleware
const loggerMiddleware = createLogger()


// habilitar el soporte para redux dev tools
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunkMiddleware,loggerMiddleware),
    // other store enhancers if any

);

// se crea el Store con todos los reducers
// y se agregan los middleware de log y funciones asyn/await
export const store = createStore(rootReducers, enhancer);
