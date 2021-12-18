import React from "react";
import ReactDOMServer from 'react-dom/server';
//import {createStore} from 'redux';
//import {Provider} from 'react-redux';
//import App from '../src/components/App.js';
import {initialState} from '../src/const.js';
//import headerReducer from "../src/store/reducers/headerReducer";
import Hello from './Hello.jsx';

export default  (req, res) => {

    //const store = createStore(headerReducer, initialState);

    const appMarkup = ReactDOMServer.renderToString(
        <Hello/>
       /* <Provider store={store}>
            <App/>
        </Provider>*/
    );

    //const preloadedState =store.getState();

    res.send(getHTML(appMarkup/*, preloadedState*/));
}

function getHTML(html, preloadedState) {
    return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <base href="/" />
    <meta charset="utf-8"/>
    <link rel="icon" href="/icons/Video_Icon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <title>App</title>
  </head>
  <body>
    <div id="root">${html}</div>
    <script>  
</script>
  </body>
</html>`
}