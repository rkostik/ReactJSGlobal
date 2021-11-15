import React from 'react';
import Content from './Content/Content.jsx';
import styles from './App.module.css';
import Footer from './Footer/Footer.jsx';
import HeaderContent from './Header/HeaderContent.jsx';
import ModalMovieWrap from './Modal/ModalMovieWrap.jsx';
import ModalRemoval from './Modal/ModalRemoval.jsx';
import ModalCompletion from './Modal/ModalCompletion.jsx';

const App = () => (
    <>
        <div className={styles.main_wrap}>
            <div>
                <HeaderContent/>
                <Content/>
                <Footer/>
                <div className={styles.wrap}>
                    <ModalMovieWrap/>
                    <ModalRemoval/>
                    <ModalCompletion/>
                </div>
            </div>
        </div>
    </>
)

export default App