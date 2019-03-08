export const articlelistActions = {
    FETCH_ARTICLES_FAILED: 'FETCH_ARTICLES_FAILED',
    FETCH_ARTICLES_FULFILLED: 'FETCH_ARTICLES_FULFILLED',


    LOAD_ARTICLES_RESULTS: 'LOAD_ARTICLES_RESULTS',
    UPDATE_ARTICLES_PAGINATION: 'UPDATE_ARTICLES_PAGINATION',

    fetchArticlesFailed: error => ({
        type: articlelistActions.FETCH_ARTICLES_FAILED,
        artdata: error
    }),
    fetchArticlesFulfilled: (data) =>({
        type: articlelistActions.FETCH_ARTICLES_FULFILLED,
        artdata: data
    }),
    loadArticles: () =>({
        type: articlelistActions.LOAD_ARTICLES_RESULTS
    }),
    updateArticlesPagination: (e, {activePage}) =>({
        type: articlelistActions.UPDATE_ARTICLES_PAGINATION,
        artdata:{
            page: activePage
        }

    })
};

export const articlelistRequestActions = {
    failed: articlelistActions.fetchArticlesFailed,
    fulfilled: articlelistActions.fetchArticlesFulfilled
}