import { combineReducers } from 'redux';
import headerReducer from '../common/hearder/store/reducer';

export default combineReducers({
    header: headerReducer
})