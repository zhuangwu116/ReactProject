import {PAGES_ARTICLE_LIST_DATA, PAGES_ARTICLE_LIST_ASYC} from "./constants";

export const getArticleListAction = (articleList)=>({
    type: PAGES_ARTICLE_LIST_DATA,
    articleList
});

export const PAGES_ARTICLE_LIST_DATA_ASYC = () =>({
    type: PAGES_ARTICLE_LIST_ASYC
})