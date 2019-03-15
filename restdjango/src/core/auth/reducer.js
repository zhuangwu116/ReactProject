import { Record } from 'immutable';
import {authActions} from './actions';
export const AuthLogin = new Record({
    id: 0,
    password: '',
    username: '',
    authuser:'',
    avatar: '',
    birthday: '',
    url: '',
    gender: '',
    mobile: '',
    qq: '',
    email: '',
    name: '',
    loginIn: false,
    loginerror: false,
    isopenmodal: false
});

export function authReducer(state= new AuthLogin(), {artdata, type}) {
    switch (type) {
        case authActions.CHANGE_AUTH_PASSWORD_VAULE:
            return state.set('password', artdata);
        case authActions.CHANGE_AUTH_USERNAME_VAULE:
            return state.set('username', artdata);
        case authActions.AUTH_PASSWORD_OR_USERNAME_ERROR:
            return state.set('loginerror', true)
        case authActions.FETCH_AUTH_FAILED:
            return state.merge({
                id: 0,
                authuser: '',
                avatar: '',
                birthday: '',
                url: '',
                gender: '',
                mobile: '',
                qq: '',
                email: '',
                name: '',
                loginIn: false,
                loginerror: false
            })
        case authActions.FETCH_AUTH_FULFILLED:
            return state.merge({
                id: 0,
                authuser: artdata.username,
                avatar: artdata.avatar,
                birthday: artdata.birthday,
                url: artdata.url,
                gender: artdata.gender,
                mobile: artdata.mobile,
                qq: artdata.qq,
                email: artdata.email,
                name: artdata.name,
                loginIn: true,
                isopenmodal: false,
                loginerror: false
            });
        case authActions.AUTH_OPEN_MODAL_LOGIN:
            return state.set('isopenmodal', true)
        case authActions.AUTH_CLOSE_MODAL_LOGIN:
            return state.set('isopenmodal', false)
        case authActions.AUTH_OUTLOGIN:
            return state.merge({
                id: 0,
                authuser: '',
                avatar: '',
                birthday: '',
                url: '',
                gender: '',
                mobile: '',
                qq: '',
                email: '',
                name: '',
                loginIn: false,
                loginerror: false
            })
        default: return state;
    }
}