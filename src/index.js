import React from 'react';
import {render, hydrate} from 'react-dom';
import App from './components/App';
import './style.css';
import store from './store';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from "react-router-dom";

hydrate(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>, document.getElementById('root')
);