export const articlelistActions = {
    FETCH_ARTICLES_FAILED: 'FETCH_ARTICLES_FAILED',
    FETCH_ARTICLES_FULFILLED: 'FETCH_ARTICLES_FULFILLED',
    FETCH_COMMENT_ARTICLES_FULFILLED: 'FETCH_COMMENT_ARTICLES_FULFILLED',
    FETCH_COMMENT_ARTICLES_FAILED: 'FETCH_COMMENT_ARTICLES_FAILED',


    LOAD_ARTICLES_RESULTS: 'LOAD_ARTICLES_RESULTS',
    LOAD_COMMENT_ARTICLES_RESULTS: 'LOAD_COMMENT_ARTICLES_RESULTS',
    UPDATE_ARTICLES_PAGINATION: 'UPDATE_ARTICLES_PAGINATION',
    UPDATE_ARTICLES_PAGINATION_VALUE: 'UPDATE_ARTICLES_PAGINATION_VALUE',

    fetchArticlesFailed: error => ({
        type: articlelistActions.FETCH_ARTICLES_FAILED,
        artdata: error
    }),
    fetchCommentArticlesFailed: error => ({
        type: articlelistActions.FETCH_COMMENT_ARTICLES_FAILED,
        artdata: error
    }),

    fetchArticlesFulfilled: (data) =>({
        type: articlelistActions.FETCH_ARTICLES_FULFILLED,
        artdata: data
    }),
    fetchCommentArticlesFulfilled: (data) =>({
        type: articlelistActions.FETCH_COMMENT_ARTICLES_FULFILLED,
        artdata: data
    }),
    loadArticles: () =>({
        type: articlelistActions.LOAD_ARTICLES_RESULTS
    }),
    loadCommentArticles: ()=>({
        type: articlelistActions.LOAD_COMMENT_ARTICLES_RESULTS
    }),
    updateArticlesPagination: (e, {activePage}) =>({
        type: articlelistActions.UPDATE_ARTICLES_PAGINATION,
        artdata:{
            page: activePage
        }

    }),
    updateArticlesPaginationValue:(page) =>({
        type: articlelistActions.UPDATE_ARTICLES_PAGINATION_VALUE,
        artdata: page
    })
};

export const articlelistRequestActions = {
    failed: articlelistActions.fetchArticlesFailed,
    fulfilled: articlelistActions.fetchArticlesFulfilled
}

export const commentArticlelistRequestActions = {
    failed: articlelistActions.fetchCommentArticlesFailed,
    fulfilled: articlelistActions.fetchCommentArticlesFulfilled
}