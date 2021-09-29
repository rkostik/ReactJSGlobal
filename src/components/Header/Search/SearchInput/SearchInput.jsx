import React from 'react';
import styles from './SearchInput.module.css';
import PropTypes from "prop-types";

const SearchInput = (props) => (
    <input className={styles.main} placeholder={props.placeholder}/>
)

SearchInput.propTypes = {
    placeholder: PropTypes.string
}

export default SearchInput