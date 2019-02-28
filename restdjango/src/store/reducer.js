import { combineReducers } from 'redux-immutable';
import { reducer as articleReducer } from '../pages/article/store';

const reducer =  combineReducers({
    article: articleReducer,
});

export default reducer;