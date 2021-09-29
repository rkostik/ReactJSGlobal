import React from 'react';
import styles from './SearchTitle.module.css';
import PropTypes from 'prop-types';

const SearchTitle = (props)=>(
    <h1 className={styles.header_txt}>
        {props.title}
    </h1>
)

SearchTitle.propTypes={
    title: PropTypes.string
}
export default SearchTitle