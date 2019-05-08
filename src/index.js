/* eslint-disable no-unreachable */
/* eslint-disable no-lone-blocks */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
//===============================

// STATE
import { createStore} from 'redux';
import {rootReducer} from './actions-reducers';


//===============================
// STORE 
const store = createStore(rootReducer);
window.store=store;


//no need to import redux store becuause ReactDom is wrapped by `Provider`

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
