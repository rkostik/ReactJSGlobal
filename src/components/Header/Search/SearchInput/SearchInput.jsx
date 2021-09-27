import React from 'react';
import SearchCSS from './SearchInput.module.css';
import PropTypes from "prop-types";

const SearchInput = (props) => (
    <input className={SearchCSS.main} placeholder={props.title}>
    </input>
)

SearchInput.propTypes ={
    title: PropTypes.string
}

export default SearchInput