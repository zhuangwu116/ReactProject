import { takeEvery, put } from 'redux-saga/effects'
import api from '../api';
import { actionCreators, constants } from '../pages/article/store';


function* getInitList(){
    try{
        const res =yield api.getArticles();
        const action = actionCreators.getArticleListAction(res.data)
        yield put(action)
    }catch(e){
        console.log(e)
    }
}
//generator 函数
function* mySagas() {
    yield takeEvery(constants.PAGES_ARTICLE_LIST_ASYC, getInitList);
}

export default mySagas;