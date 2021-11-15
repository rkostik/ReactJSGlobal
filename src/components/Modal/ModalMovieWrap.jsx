import React from 'react';
import styles from './Modal.module.css';
import {useSelector} from 'react-redux';
import ModalMovie from '../ModalMovie/ModalMovie.jsx';
import ModalEditMovie from '../ModalMovie/ModalEditMovie.jsx';

const ModalMovieWrap = () => {
    const modalActive = useSelector(state => state.modalActive);
    const editActive = useSelector(state => state.editActive);
    const typeWindow = useSelector(state => state.typeWindow);
    return typeWindow==='add'?(
        <div className={modalActive ? styles.modal : `${styles.modal_add} ${styles.active}`}>
            <ModalMovie/>
        </div>
    ):(
        <div className={editActive ? styles.modal : `${styles.modal_edit} ${styles.active}`}>
            <ModalEditMovie/>
        </div>
    )
}

export default ModalMovieWrap