import React from 'react';
import styles from './SearchInput.module.css';

const SearchInput = (props) => (
    <input className={styles.main} placeholder={props.placeholder}/>
)

export default SearchInput