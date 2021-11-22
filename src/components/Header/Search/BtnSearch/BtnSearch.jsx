import React, {useCallback} from 'react';
import styles from './BtnSearch.module.css';
import PropTypes from 'prop-types';
import {CONST_LIST} from '../../../../const.js';
import {useDispatch, useSelector} from 'react-redux';
import {searchMovieClick, setSearchText} from '../../../../store/actions/actionCreators.js';
import {useHistory} from "react-router-dom";

const BtnSearch = ()=> {
    const searchParam = useSelector(state=>state.searchText);
    const history = useHistory();
    const dispatch=useDispatch();
    const onSearchMovieClick = useCallback((val) => {
        history.push(`/search/${val}`);
        dispatch(setSearchText(''));
    }, [dispatch]);

 return   (
     <button className={`${styles.div_btn} ${styles.btn_txt}`} onClick={()=>onSearchMovieClick(searchParam)}>{CONST_LIST.SEARCH_BTN_TXT}</button>
    )
}

BtnSearch.propTypes ={
        onClick: PropTypes.func
}

export default BtnSearch