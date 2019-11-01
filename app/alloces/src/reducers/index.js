import { combineReducers } from 'redux';
import loginReducer  from './login.reducer';

const rootReducers = combineReducers(
    {
        authentication: loginReducer
    }
);

export default rootReducers;