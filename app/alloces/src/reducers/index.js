import { combineReducers } from 'redux';
import loginReducer  from './login.reducer';
import { serverReducer } from './servidores.reducer';
import { connectionReducer } from './conexiones.reducer';
import { driversReducer } from '../reducers/drivers.reducer'

const rootReducers = combineReducers(
    {
        authentication: loginReducer,
        servers: serverReducer,
        connections: connectionReducer,
        drivers: driversReducer
    }
);

export default rootReducers;