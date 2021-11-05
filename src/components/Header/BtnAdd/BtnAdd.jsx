import React, {useCallback} from 'react';
import styles from './BtnAdd.module.css';
import {useDispatch} from 'react-redux';
import {CONST_LIST} from '../../../const.js';
import {addMovieClick} from '../../../store/actions/actionCreators.js';

const BtnAdd = () => {
    const dispatch = useDispatch();
    const onAddMovieClick = useCallback(() => {
        dispatch(addMovieClick());
    }, []);
   return (
        <div className={styles.div_btnAdd}>
            <div className={styles.txt_Add} onClick={()=>onAddMovieClick()}>{CONST_LIST.BTN_ADD_TXT}</div>
        </div>
    )
}

export default BtnAdd