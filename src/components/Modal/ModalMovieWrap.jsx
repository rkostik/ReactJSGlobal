import React from 'react';
import styles from './Modal.module.css';
import {useSelector} from 'react-redux';
import ModalMovie from '../ModalMovie/ModalMovie.jsx';

const ModalMovieWrap = () => {
    const modalActive =useSelector(state=>state.modalActive);
    return (
        <div className={modalActive ? styles.modal : `${styles.modal} ${styles.active}`}>
            <ModalMovie/>
        </div>
    )
}

export default ModalMovieWrap