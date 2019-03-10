import { Record } from 'immutable';
import {authActions} from './actions';
export const AuthLogin = new Record({
    password: '',
    username: '',
    authuser:'',
    authimg: '',
    loginIn: false,
    token: ''
});

export function authReducer(state= new AuthLogin(), {artdata, type}) {
    switch (type) {
        case authActions.CHANGE_AUTH_PASSWORD_VAULE:
            return state.set('password', artdata);
        case authActions.CHANGE_AUTH_USERNAME_VAULE:
            return state.set('username', artdata);
        default: return state;
    }
}