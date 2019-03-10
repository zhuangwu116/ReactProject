export const authActions = {
    FETCH_AUTH_FAILED: 'FETCH_AUTH_FAILED',
    FETCH_AUTH_FULFILLED: 'FETCH_AUTH_FULFILLED',

    CHANGE_AUTH_USERNAME_VAULE: 'CHANGE_AUTH_USERNAME_VAULE',
    CHANGE_AUTH_PASSWORD_VAULE: 'CHANGE_AUTH_PASSWORD_VAULE',
    AUTH_LOGIN_SUBMIT: 'AUTH_LOGIN_SUBMIT',
    AUTH_OUTLOGIN: 'AUTH_OUTLOGIN',
    AUTH_IS_LOGIN: 'AUTH_IS_LOGIN',
    fetchAuthFailed: error => ({
        type: authActions.FETCH_SEARCH_FAILED,
        artdata: error
    }),
    fetchAuthFulfilled: (data) =>({
        type: authActions.FETCH_SEARCH_FULFILLED,
        artdata: data
    }),
    handleUserNameChange: (e, {name, value }) =>({
        type: authActions.CHANGE_AUTH_USERNAME_VAULE,
        artdata: value
    }),
    handlePasswordChange: (e, {name, value}) => ({
        type: authActions.CHANGE_AUTH_PASSWORD_VAULE,
        artdata: value
    }),
    handleloginSubmit: ()=>({
        type: authActions.AUTH_LOGIN_SUBMIT
    }),
    handleoutlogin: ()=>({
        type: authActions.AUTH_OUTLOGIN
    }),
    

};

export const authRequestActions = {
    failed: authActions.fetchAuthFailed,
    fulfilled: authActions.fetchAuthFulfilled
}