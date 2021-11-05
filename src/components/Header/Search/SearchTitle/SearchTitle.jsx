import React from 'react';
import styles from './SearchTitle.module.css';
import {CONST_LIST} from '../../../../const.js';

const SearchTitle = () => (
        <h1 className={styles.header_txt}>
            {CONST_LIST.SEARCH_TITLE}
        </h1>
    )


export default SearchTitle