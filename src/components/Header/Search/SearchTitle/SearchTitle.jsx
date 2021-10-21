import React from 'react';
import styles from './SearchTitle.module.css';

const SearchTitle = (props)=>(
    <h1 className={styles.header_txt}>
        {props.title}
    </h1>
)

export default SearchTitle