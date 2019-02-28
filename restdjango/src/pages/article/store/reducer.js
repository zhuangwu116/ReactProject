import { fromJS } from "immutable";

import * as constants from './constants';

const defaultState = fromJS({
    articleList: [],
})

export default (state=defaultState, action) =>{
    switch (action.type) {
        case constants.PAGES_ARTICLE_LIST_DATA:
            return state.merge({
                articleList: fromJS(action.articleList)
            });
        default:
            return state
    }
}