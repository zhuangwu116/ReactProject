export const categorysActions = {
    FETCH_CATEGORYS_FAILED: 'FETCH_CATEGORYS_FAILED',
    FETCH_CATEGORYS_FULFILLED: 'FETCH_CATEGORYS_FULFILLED',


    LOAD_CATEGORYS_RESULTS: 'LOAD_CATEGORYS_RESULTS',
    WILL_MOUNT_DROPDOWN: 'WILL_MOUNT_DROPDOWN',
    WILL_UNMOUNT_DROPDOWN: 'WILL_UNMOUNT_DROPDOWN',

    CHANGE_DROPDOWN_VAULE: 'CHANGE_DROPDOWN_VAULE',

    fetchCategorysFailed: error => ({
        type: categorysActions.FETCH_CATEGORYS_FAILED,
        artdata: error
    }),
    fetchCategorysFulfilled: (data) =>({
        type: categorysActions.FETCH_CATEGORYS_FULFILLED,
        artdata: data
    }),
    loadCategorys: () =>({
        type: categorysActions.LOAD_CATEGORYS_RESULTS
    }),
    handleChangeDropdown: (e, {text, value}) =>({
        type: categorysActions.CHANGE_DROPDOWN_VAULE,
        artdata: value
    }),
    willMountDropdown:() =>({
        type: categorysActions.WILL_MOUNT_DROPDOWN
    }),
    willUnMountDropdown:() =>({
        type: categorysActions.WILL_UNMOUNT_DROPDOWN
    })

};

export const categorysRequestActions = {
    failed: categorysActions.fetchCategorysFailed,
    fulfilled: categorysActions.fetchCategorysFulfilled
}