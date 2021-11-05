import React from 'react';
import styles from './Modal.module.css';
import {useSelector} from 'react-redux';
import Removal from '../Confirmation/Removal/Removal.jsx';

const ModalRemoval = () => {
    const deleteActive =useSelector(state=>state.deleteActive);
    return (
        <div className={deleteActive ? styles.modal : `${styles.modal} ${styles.active}`}>
            <Removal/>
        </div>
    )
}

export default ModalRemoval