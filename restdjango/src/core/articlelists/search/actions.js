export const searchActions = {
    FETCH_SEARCH_FAILED: 'FETCH_SEARCH_FAILED',
    FETCH_SEARCH_FULFILLED: 'FETCH_SEARCH_FULFILLED',

    RESET_HEADER_SEARCH: 'RESET_HEADER_SEARCH',
    CHANGE_SEARCH_VAULE: 'CHANGE_SEARCH_VAULE',
    HANDLE_CHANGE_SEARCH_VALUE: 'HANDLE_CHANGE_SEARCH_VALUE',
    SELECT_SEARCH_RESULT: 'SELECT_SEARCH_RESULT',
    fetchSearchFailed: error => ({
        type: searchActions.FETCH_SEARCH_FAILED,
        artdata: error
    }),
    fetchSearchFulfilled: (data) =>({
        type: searchActions.FETCH_SEARCH_FULFILLED,
        artdata: data
    }),
    handleChangeSearch: (e, { value }) =>({
        type: searchActions.HANDLE_CHANGE_SEARCH_VALUE,
        artdata: value
    }),
    changeSearchValue: (value) => ({
        type: searchActions.CHANGE_SEARCH_VAULE,
        artdata: value
    }),
    resetComponent: () =>({
        type: searchActions.RESET_HEADER_SEARCH
    }),
    handleResultSelect :(e, { result }) =>({
        type: searchActions.SELECT_SEARCH_RESULT,
        artdata: result
    })

};

export const searchRequestActions = {
    failed: searchActions.fetchSearchFailed,
    fulfilled: searchActions.fetchSearchFulfilled
}