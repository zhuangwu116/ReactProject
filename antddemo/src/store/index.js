import { createStore, compose } from "redux";
// import {applyMiddleware} from 'redux';
import reducer from './reducer';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

// const enhancer = composeEnhancers(
//     applyMiddleware(thunk),
// );
const enhancer = composeEnhancers(
);
const store = createStore(
    reducer,
    enhancer
);
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export default store;