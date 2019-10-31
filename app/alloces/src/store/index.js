/**
 * Creador: Jesús Alberto Briseño Camacho
 * Fecha: 30/10/2019
 * 
 * Store de la aplicación
 */

import { createStore, combineReducers, applyMiddleware } from 'redux';
//Libreria para acciones asyncronas o no asyncronas
import thunkMiddleware from 'redux-thunk';

import { createLogger } from 'redux-logger';

import { serverReducer } from '../reducers/servidores.reducer';
import { connectionReducer } from '../reducers/conexiones.reducer';
import { driversReducer } from '../reducers/drivers.reducer';
//crea un logger midleware
const loggerMidleware = createLogger();
//combina nuestros reducers para nuestro store
const rootReducers = combineReducers({
        servers: serverReducer,
        connections: connectionReducer,
        drivers: driversReducer
})
//Se crea el store con todos los reducers
//y se agregan los midleware
export const store = createStore(rootReducers,
                        applyMiddleware(
                            loggerMidleware,
                            thunkMiddleware
                        ));