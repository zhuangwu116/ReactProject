import { all } from 'redux-saga/effects'

import { articleSagas } from '../core/articlelists';


//generator 函数
function* mySagas() {
    yield all([
        ...articleSagas,
    ]);
}

export default mySagas;