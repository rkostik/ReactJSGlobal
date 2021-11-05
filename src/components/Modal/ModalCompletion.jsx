import React from 'react';
import styles from './Modal.module.css';
import {useSelector} from 'react-redux';
import Completion from '../Confirmation/Completion/Completion.jsx';

const ModalCompletion = () => {
    const completeActive =useSelector(state=>state.completeActive);
    return (
        <div className={completeActive ? styles.modal : `${styles.modal} ${styles.active}`}>
            <Completion/>
        </div>
    )
}

export default ModalCompletion