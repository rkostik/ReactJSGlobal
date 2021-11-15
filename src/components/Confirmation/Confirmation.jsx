import React, {useCallback} from 'react';
import styles from './Confirmation.module.css';
import Close from "./Close/Close.jsx";
import {useDispatch} from "react-redux";
import {closeConfirmClick} from '../../store/actions/actionCreators.js';

const Confirmation = (props) => {
    const dispatch = useDispatch();
    const onCloseConfirmClick = useCallback(() => {
        dispatch(closeConfirmClick());
    }, [dispatch]);
    return(
    <div className={styles.main_block}>
        {props.children}
        <Close handleClick={onCloseConfirmClick}/>
    </div>
)}

export default Confirmation