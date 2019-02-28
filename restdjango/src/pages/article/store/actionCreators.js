import {PAGES_ARTICLE_LIST_DATA} from "./constants";

export const getArticleListAction = (articleList)=>({
    type: PAGES_ARTICLE_LIST_DATA,
    articleList
});