import React from 'react';
import styles from './SearchInput.module.css';
import PropTypes from "prop-types";

const SearchInput = (props) => (
    <input className={styles.main} placeholder={props.title}/>
)

SearchInput.propTypes = {
    title: PropTypes.string
}

export default SearchInput