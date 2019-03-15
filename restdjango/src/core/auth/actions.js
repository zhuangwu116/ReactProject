export const authActions = {
    FETCH_AUTH_FAILED: 'FETCH_AUTH_FAILED',
    FETCH_AUTH_FULFILLED: 'FETCH_AUTH_FULFILLED',

    CHANGE_AUTH_USERNAME_VAULE: 'CHANGE_AUTH_USERNAME_VAULE',
    CHANGE_AUTH_PASSWORD_VAULE: 'CHANGE_AUTH_PASSWORD_VAULE',
    AUTH_LOGIN_SUBMIT: 'AUTH_LOGIN_SUBMIT',
    AUTH_OUTLOGIN: 'AUTH_OUTLOGIN',
    AUTH_IS_LOGIN: 'AUTH_IS_LOGIN',
    AUTH_GET_USERINFO: 'AUTH_GET_USERINFO',
    AUTH_CLEAR_INFO: 'AUTH_CLEAR_INFO',
    AUTH_PASSWORD_OR_USERNAME_ERROR: 'AUTH_PASSWORD_OR_USERNAME_ERROR',
    AUTH_LOGIN_SUCCESS: 'AUTH_LOGIN_SUCCESS',
    AUTH_OPEN_MODAL_LOGIN: 'AUTH_OPEN_MODAL_LOGIN',
    AUTH_CLOSE_MODAL_LOGIN: 'AUTH_CLOSE_MODAL_LOGIN',
    fetchAuthFailed: error => ({
        type: authActions.FETCH_AUTH_FAILED,
        artdata: error
    }),
    fetchAuthFulfilled: (data) =>({
        type: authActions.FETCH_AUTH_FULFILLED,
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
        type: authActions.AUTH_LOGIN_SUBMIT,
    }),
    handleoutlogin: ()=>({
        type: authActions.AUTH_OUTLOGIN
    }),
    loginautherror: () =>({
        type: authActions.AUTH_PASSWORD_OR_USERNAME_ERROR
    }),
    loginIsAuth: () =>({
        type: authActions.AUTH_IS_LOGIN
    }),
    handleopenmodal: ()=>({
        type: authActions.AUTH_OPEN_MODAL_LOGIN
    }),
    handleclosemodal: ()=>({
        type: authActions.AUTH_CLOSE_MODAL_LOGIN
    })
};

export const authRequestActions = {
    failed: authActions.fetchAuthFailed,
    fulfilled: authActions.fetchAuthFulfilled
}