import React, {useCallback} from 'react';
import styles from './DDList.module.css';
import {onSortClick} from '../../../store/actions/actionCreators.js';
import {useDispatch} from 'react-redux';

const DDList = () => {
    const dispatch =useDispatch();
    const onChangeSortClick = useCallback((val) => {
        dispatch(onSortClick(val));
    }, []);
  return  (
        <div className={styles.main_dd}>
            <div className={styles.select_block}>
                <select data-testid='select' onChange={(e)=>onChangeSortClick(e.target.value)}>
                    <option data-testid='select-option'>release date</option>
                    <option data-testid='select-option'>rating</option>
                    <option data-testid='select-option'>title</option>
                </select>
            </div>
        </div>
    )
}

export default DDList