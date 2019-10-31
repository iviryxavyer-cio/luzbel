import { createStore, combineReducers, applyMiddleware } from 'redux';

//importar librerias async/await y logger
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import loginReducer from '../reducers/login.reducer';

//crear logger middleware
const loggerMiddleware = createLogger()

//combine reducer para nuestro store
const rootReducers = combineReducers(
    {
        authentication: loginReducer
    }
)

// se crea el Store con todos los reducers
// y se agregan los middleware de log y funciones asyn/await
export const store = createStore(rootReducers, applyMiddleware(thunkMiddleware,loggerMiddleware));