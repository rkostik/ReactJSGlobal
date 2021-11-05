import React from 'react';
import Content from './Content/Content.jsx';
import Footer from './Footer/Footer.jsx';
import HeaderContent from './Header/HeaderContent.jsx';
import ModalMovieWrap from './Modal/ModalMovieWrap.jsx';
import ModalRemoval from './Modal/ModalRemoval.jsx';
import ModalCompletion from './Modal/ModalCompletion.jsx';

const App = () => (
    <>
        <HeaderContent/>
        <Content/>
        <Footer/>
        <ModalMovieWrap/>
        <ModalRemoval/>
        <ModalCompletion/>
    </>
)

export default App