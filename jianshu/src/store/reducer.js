import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/hearder/store';


const reducer =  combineReducers({
    header: headerReducer
});

export default reducer;