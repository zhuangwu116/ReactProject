import { takeEvery, put } from 'redux-saga/effects'
import { PAGES_ARTICLE_LIST_DATA } from "../pages/article/store/constants";
import api from '../api';
import { getArticleListAction } from '../pages/article/store/actionCreators';


function* getInitList(){
    try{
        const res =yield api.getArticles()
        const action = getArticleListAction(res.data)
        yield put(action)
    }catch(e){
        console.log(e)
    }
}
//generator 函数
function* mySagas() {
    yield takeEvery(PAGES_ARTICLE_LIST_DATA, getInitList);
}

export default mySagas;