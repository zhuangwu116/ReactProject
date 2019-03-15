import { combineReducers } from 'redux-immutable';
import { articleReducer } from '../core/articlelists';
import { authReducer } from "../core/auth";

const reducer =  combineReducers({
    article: articleReducer,
    auth: authReducer
});

export default reducer;