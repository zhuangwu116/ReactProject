import {call, takeLatest, put, fork, select, take} from 'redux-saga/effects';
import api from '../api';

import {  articlelistActions, articlelistRequestActions } from './actions';
import {categorysActions, categorysRequestActions} from './categorys';
import { searchActions, searchRequestActions} from "./search";
import { getArticlesState } from './selectors';
import history from '../history';

export function* loadArticles() {
    try{
        const articlestate = yield select(getArticlesState);
        let params = {};
        params.page = articlestate.getIn(['article','page'])
        params.page_size = articlestate.getIn(['article', 'page_size'])
        if (articlestate.getIn(['article','ordering_click'])){
            params.ordering = '-click_count'
        }else{
            params.ordering = '-date_publish'
        }
        let url =  `?page=${params.page}&page_size=${params.page_size}&ordering=${params.ordering}`;
        if (articlestate.getIn(['article', 'categoryvalue']) !== -1){
            params.top_category = articlestate.getIn(['article', 'categoryvalue'])
            url += `&top_category=${params.top_category}`
        }

        const res = yield call(api.getArticles, params);
        console.log(res);
        yield put(articlelistRequestActions.fulfilled(res.data))
        const urlconifg = {
            pathname: `/articles`,
            search: url
        }
        yield history.push(urlconifg)

    }catch(error) {
        yield put(articlelistRequestActions.failed(error));
    }
}

export function* loadcategorys() {
    try{
        const res = yield call(api.getCategorys);
        yield put(categorysRequestActions.fulfilled(res.data))
    }catch(error) {
        yield put(categorysRequestActions.failed(error));
    }
}
export function* update_pagination({artdata}) {
    try {
        yield put(articlelistActions.updateArticlesPaginationValue(artdata.page));
        yield put(articlelistActions.loadArticles());
    }catch (error) {
        yield put(articlelistRequestActions.failed(error));
    }
}

export function* change_categorys(artdata) {
    try {
        const articlestate = yield select(getArticlesState);
        let params = {
            page:1,
            page_size: articlestate.getIn(['article','page_size'])
        }
        let url =  `?page=${params.page}&page_size=${params.page_size}`;
        if ( artdata !==-1 ){
            params.top_category = artdata
            url += `&top_category=${params.top_category}`
        }
        const res = yield call(api.getArticles, params);
        yield put(articlelistRequestActions.fulfilled(res.data))
        const urlconifg = {
            pathname: `/articles`,
            search: url
        }
        yield history.push(urlconifg)
    }catch (error) {
        yield put(articlelistRequestActions.failed(error));
    }
}
export function* handleSearchChange({artdata}){
    try {
        yield put(searchActions.changeSearchValue(artdata));
        if (artdata.length < 1){
            yield put(searchActions.resetComponent())
            return
        }
        let params = {
            page:1,
            page_size: 10,
            search: artdata,
            ordering: '-date_publish'
        }
        const res =yield call(api.getArticles, params);
        yield put(searchRequestActions.fulfilled(res.data))
        const urlconifg = {
            search: `?search=${artdata}`
        }
        yield history.push(urlconifg)
    }catch (error) {
        console.log(error)
        yield put(searchRequestActions.failed(error));
    }
}
export function* watchArticles(){
    yield takeLatest(articlelistActions.LOAD_ARTICLES_RESULTS, loadArticles);
}
export function* watchUpdatePagination() {
    yield takeLatest(articlelistActions.UPDATE_ARTICLES_PAGINATION, update_pagination);
}
export function* watchCategorys(){
    while(true){
        yield take(categorysActions.LOAD_CATEGORYS_RESULTS);
        yield fork(loadcategorys);
    }
}
export function* watchChangeCategorys() {
    while(true){
        const {artdata} = yield take(categorysActions.CHANGE_DROPDOWN_VAULE);
        yield fork(change_categorys, artdata);
    }
}


export function* watchhandleSearchChange() {
    yield takeLatest(searchActions.HANDLE_CHANGE_SEARCH_VALUE, handleSearchChange);
}

export const articleSagas = [
    fork(watchArticles),
    fork(watchUpdatePagination),
    fork(watchCategorys),
    fork(watchChangeCategorys),
    fork(watchhandleSearchChange)
];