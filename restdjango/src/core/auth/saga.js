import {call, takeLatest, put, fork, select} from 'redux-saga/effects';
import api from '../api';
import { authActions, authRequestActions} from "./actions";
import {getArticlesState} from "../articlelists/selectors";


let localStorage = global.window.localStorage;

export function* authlogin() {
    try{
        const authstate = yield select(getArticlesState);
        const params = {
            username: authstate.getIn(['auth', 'username']),
            password: authstate.getIn(['auth', 'password'])
        }
        const ret = yield call(api.login, params);
        if (ret.status === 200){
            localStorage.token = ret.data.token;
            yield put(authActions.loginIsAuth())
        }else {
            localStorage.token = ''
            yield put(authActions.loginautherror())
        }
    }catch (error) {
        console.log(error)
        yield put(authRequestActions.failed(error))
    }
}

export function* islogin() {
    try{
        const token = localStorage.token
        if (!token){
            return
        }
        const res =yield call(api.getUserDetail, token)
        if (res.status === 200){
            yield put(authRequestActions.fulfilled(res.data))
        }
    }catch (error) {
        yield put(authRequestActions.failed(error))
    }
}
export function* authLoginOut(){
    yield localStorage.token = '';
}
export function* watchIsLogin() {
    yield takeLatest(authActions.AUTH_IS_LOGIN, islogin);
}

export function* watchAuthLogin() {
    yield takeLatest(authActions.AUTH_LOGIN_SUBMIT, authlogin)
}

export function* watchAuthLoginOut() {
    yield takeLatest(authActions.AUTH_OUTLOGIN, authLoginOut)
}
export const authSagas = [
    fork(watchIsLogin),
    fork(watchAuthLogin),
    fork(watchAuthLoginOut)
];

