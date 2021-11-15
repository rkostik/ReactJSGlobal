import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import './style.css';
import store from './store/index.js';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from "react-router-dom";
import {createBrowserHistory} from 'history';

/*const history = createBrowserHistory();*/

render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>, document.getElementById('root')
);