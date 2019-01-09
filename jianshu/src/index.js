import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './style.js'
import App from './App';
import {GlobalStyle} from "./style";
import { IconfontGlobalStyle } from './statics/iconfont/iconfont';

ReactDOM.render(
    <Fragment>
    <App />
    <GlobalStyle/>
    <IconfontGlobalStyle/>
    </Fragment>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

