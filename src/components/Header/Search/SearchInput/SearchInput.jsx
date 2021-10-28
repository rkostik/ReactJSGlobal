import React from 'react';
import styles from './SearchInput.module.css';
import {CONST_LIST} from '../../../../const.js';

const SearchInput = () => (
    <input className={styles.main} placeholder={CONST_LIST.SEARCH_PLACEHOLDER}/>
)

export default SearchInput