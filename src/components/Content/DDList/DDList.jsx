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
                <select onChange={(e)=>onChangeSortClick(e.target.value)}>
                    <option>release date</option>
                    <option>rating</option>
                    <option>title</option>
                </select>
            </div>
        </div>
    )
}

export default DDList