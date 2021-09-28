import React from 'react';
import Header from './Header/Header.jsx';
import Content from './Content/Content.jsx';
import Footer from "./Footer/Footer.jsx";
import ErrorBoundry from './ErrorBoundry/ErrorBoundry.jsx';

const App = () => (
        <ErrorBoundry>
            <Header/>
            <Content/>
            <Footer prefix="netflix" postfix="roulette"/>
        </ErrorBoundry>
)

export default App