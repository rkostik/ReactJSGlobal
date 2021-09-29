import React from 'react';
import Header from './Header/Header.jsx';
import Content from './Content/Content.jsx';
import Footer from "./Footer/Footer.jsx";
import ErrorBoundry from './ErrorBoundry/ErrorBoundry.jsx';
import {CONST_ARR} from "../const";

const App = () => (
        <ErrorBoundry>
            <Header prefix={CONST_ARR.PREFIX_LOGO} postfix={CONST_ARR.POSTFIX_LOGO} textAdd={CONST_ARR.BTN_ADD_TXT} placeholder={CONST_ARR.SEARCH_PLACEHOLDER} text={CONST_ARR.SEARCH_BTN_TXT} title={CONST_ARR.SEARCH_TITLE}/>
            <Content/>
            <Footer prefix={CONST_ARR.PREFIX_LOGO} postfix={CONST_ARR.POSTFIX_LOGO}/>
        </ErrorBoundry>
)

export default App