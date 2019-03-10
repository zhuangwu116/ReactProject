import {call, takeLatest, put, fork, select, take} from 'redux-saga/effects';
import api from '../api';
import { authActions, authRequestActions} from "./actions";

let localStorage = global.window.localStorage;

export function* authlogin({username, password}) {

}

export function* islogin() {
    try{
        const token = localStorage.token
        if (!token){
            return
        }
        const res = api.getUserDetail(token)
        if (res.status === 200){
            yield put(authActions.AUTH_IS_LOGIN)
        }
    }catch (error) {

    }



}

export function* watchauthlogin() {

}

