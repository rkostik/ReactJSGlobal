import React from 'react';
import styles from './Modal.module.css';
import {useSelector} from 'react-redux';

const Modal = (props) => {
    const modalActive =useSelector(state=>state.modalActive);
    return (
        <div className={modalActive ? styles.modal : `${styles.modal} ${styles.active}`}>
            {props.children}
        </div>
    )
}

export default Modal