import React, {useRef} from 'react';
import styles from './SearchInput.module.css';
import {CONST_LIST} from '../../../../const.js';
import {useDispatch, useSelector} from 'react-redux';
import {setSearchText} from '../../../../store/actions/actionCreators';

const SearchInput = () => {
    const ref= useRef('');
    const inputValue = useSelector(state=>state.searchText);
    const dispatch = useDispatch();
    const onChange = ()=>{
        dispatch(setSearchText(ref.current.value));
    }
    return(
    <input ref={ref} value={inputValue} className={styles.main} placeholder={CONST_LIST.SEARCH_PLACEHOLDER} onChange={onChange}/>
)}

export default SearchInput