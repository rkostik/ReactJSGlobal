import React, {useState, useEffect} from 'react';
import Header from './Header/Header.jsx';
import HeaderDetail from './HeaderDetail/HeaderDetail.jsx';
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
    const [activeCalendar, setActive] = useState(false);
    const [ddmActive, setDDMActive] = useState(false);
    const [deleteActive, setDelete] = useState(false);
    const [completeActive, setComplete] = useState(false);
    const [viewActive, setView] = useState(true);
    const [item, setItem] = useState(-1);
    const addMovieClick = () => {
        setModalActive(false);
        setType('add');
        setActive(false);
    };
    const editClick = () => {
        setModalActive(true);
        setType('edit');
        setDDMActive(false);
    };

    const ddmOpenClick = (ddmCardKey) => {
        setItem(ddmCardKey);
        ddmActive ? setDDMActive(false) : setDDMActive(true);
    };

    const ddmCloseClick = () => {
        ddmActive ? setDDMActive(false) : setDDMActive(true);
    }

    const addClick = () => setModalActive(true);

    const closeClick = () => setDelete(false);

    const openClick = () => {
        activeCalendar ? setActive(false) : setActive(true)
    };
    const movieClick = (cardKey) => {
        setView(false)
        setItem(cardKey);
    };

    const onSearchClick = () => setView(true);

    const deleteClick = () => {
        setDelete(true);
        setDDMActive(false);
    };

    const [movies, setMovies] = useState(['']);

    useEffect(() => {
        let url = 'data/movies.json';
        fetch(url)
            .then(res => res.json()).then(movies => setMovies(movies));
    }, []);

    return (
        <> {viewActive ? <Header arrConst={CONST_LIST} addClick={addClick}/> :
            <HeaderDetail arrConst={CONST_LIST} onSearchClick={onSearchClick} arrCard={movies[item]}/>
        }
            <Content editClick={editClick} movies={movies} active={ddmActive} ddmOpenClick={ddmOpenClick}
                     movieClick={movieClick} deleteClick={deleteClick} closeClick={ddmCloseClick} itemKey={item}/>
            <Footer arrConst={CONST_LIST}/>
            <Modal active={modalActive}>
                <ModalMovie add_movie_arr={ADD_MOVIE_ARR} handleClick={addMovieClick} type={typeWindow}
                            openClick={openClick} activeCalendar={activeCalendar}/>
            </Modal>
            <Modal active={deleteActive}>
                <Removal closeClick={closeClick}/>
            </Modal>
            <Modal active={completeActive}>
                <Completion/>
            </Modal>
        </>
    )
}


export default App