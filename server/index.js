/*
const { app } = require('./app');
*/
import 'babel-register';
import React from 'react';
import 'babel-polyfill';
import ReactDOMServer from 'react-dom/server.js';
import express from 'express';
import App from '../src/components/App.js';
import {StaticRouter} from 'react-router-dom';
import bodyParser from 'body-parser';
import {initialState} from '../src/const.js'
import Provider from 'react-redux/lib/components/Provider';
import cfgStore from '../src/store/configureStore.js';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(express.static('styles'));
//app.use('/styles', express.static(`${__dirname}/assets/css`));

app.get('*', (req, res) => {
    const context = {}
    const store = cfgStore(initialState);
    const content = ReactDOMServer.renderToString(
        <Provider store={store}>
            <StaticRouter context={context} location={req.url}>
                <App/>
            </StaticRouter>
        </Provider>
    );
    const preloadedState = store.getState();

    const html = `
        <!DOCTYPE html>
    <html lang="en">
        <head>
        <base href="/" />
        <meta charset="utf-8"/>
        <link rel="icon" href="/icons/Video_Icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <title>App</title>
        <link rel="stylesheets" type="text/css" href="../styles/combined.css">
</head>
    <body>
    <div id="root">${content}</div>
    <script>
        window.PRELOAD_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\i003c')}
    </script>
    </body>
</html`
    res.send(html);
});

app.listen(PORT, () => {
    console.log(' ===== -->>>> Application is started on localhost:', PORT);
});