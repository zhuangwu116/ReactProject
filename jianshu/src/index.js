import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './style.js'
import App from './App';
import {GlobalStyle} from "./style";


ReactDOM.render(<Fragment><App /><GlobalStyle/></Fragment>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
