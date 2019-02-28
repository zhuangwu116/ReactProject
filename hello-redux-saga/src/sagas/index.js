import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { INCREMENT_ASYNC, INCREMENT } from "../constants";
import { increment } from "../actions/counter";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function* incrementAsync() {
    yield delay(2000);
    yield put({type: 'INCREMENT'})
}

export function* watchIncremnetAsySaga() {
    yield takeEvery(INCREMENT_ASYNC, incrementAsync);
}