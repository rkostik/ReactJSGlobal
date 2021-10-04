import React, {useState, useEffect} from 'react';
import Header from './Header/Header.jsx';
import Content from './Content/Content.jsx';
import Footer from './Footer/Footer.jsx';
import {ADD_MOVIE_ARR, CONST_LIST} from '../const';
import ModalMovie from './ModalMovie/ModalMovie.jsx'
import Modal from './Modal/Modal.jsx';
import Completion from './Confirmation/Completion/Completion.jsx';
import Removal from './Confirmation/Removal/Removal.jsx';

const App = () => {
    const [modalActive, setModalActive] = useState(false);
    const [typeWindow, setType] = useState('add');
    const handleClick = () => {
        setModalActive(false)
        setType('add');
    };
    const editClick = () => {
        setModalActive(true);
        setType('edit');
    };
    const addClick = () => setModalActive(true);

    useEffect(() => {
        console.log(modalActive);
    }, [modalActive])

    return (
        <>
            <Header arrConst={CONST_LIST} addClick={addClick}/>
            <Content editClick={editClick}/>
            <Footer arrConst={CONST_LIST}/>
            <Modal active={modalActive} setActive={setModalActive}>
                <ModalMovie add_movie_arr={ADD_MOVIE_ARR} handleClick={handleClick} type={typeWindow}/>
                <Completion/>
                <Removal/>
            </Modal>
        </>
    )
}

export default App