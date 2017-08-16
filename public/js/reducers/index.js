import {combineReducers} from 'redux';
import hello from "./hello";
import login from './login';

export default combineReducers({
    hello,
    login
});
