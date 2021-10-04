import React from 'react';
import styles from './Modal.module.css';

const Modal = (props) => {
    return (
        <div className={props.active ? styles.modal : `${styles.modal} ${styles.active}`}>
            {props.children}
        </div>
    )
}

export default Modal