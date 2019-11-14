import { combineReducers } from 'redux';
import loginReducer  from './login.reducer';
import { serverReducer } from './servidores.reducer';
import { connectionReducer } from './conexiones.reducer';
import { driversReducer } from './drivers.reducer'
import { usersReducers } from './usuarios.reducer';
import { modal } from './modalReducer';
import { reducer as reducerForm} from 'redux-form';

const rootReducers = combineReducers(
    {
        authentication: loginReducer,
        servers: serverReducer,
        connections: connectionReducer,
        drivers: driversReducer,
        usuarios: usersReducers,
        modal: modal,
        form: reducerForm,
    }
);

export default rootReducers;