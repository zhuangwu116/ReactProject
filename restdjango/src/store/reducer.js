import { combineReducers } from 'redux-immutable';
import { articleReducer } from '../core/articlelists';
const reducer =  combineReducers({
    article: articleReducer,
});

export default reducer;