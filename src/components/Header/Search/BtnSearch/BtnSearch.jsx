import React, {useCallback} from 'react';
import styles from './BtnSearch.module.css';
import PropTypes from 'prop-types';
import {CONST_LIST} from '../../../../const.js';
import {useDispatch} from 'react-redux';

const BtnSearch = ()=> {
    const dispatch=useDispatch();
    const onSearchMovieClick = useCallback(() => {
        dispatch(onSearchMovieClick);
    }, [dispatch]);

 return   (
        <div className={styles.div_btn}>
            <div className={styles.btn_txt} onClick={onSearchMovieClick}>
                {CONST_LIST.SEARCH_BTN_TXT}
            </div>
        </div>
    )
}

BtnSearch.propTypes ={
        onClick: PropTypes.func
}

export default BtnSearch