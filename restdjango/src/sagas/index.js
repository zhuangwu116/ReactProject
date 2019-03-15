import { all } from 'redux-saga/effects'

import { articleSagas } from '../core/articlelists';
import { authSagas} from "../core/auth";

//generator 函数
function* mySagas() {
    yield all([
        ...articleSagas,
        ...authSagas,
    ]);
}

export default mySagas;