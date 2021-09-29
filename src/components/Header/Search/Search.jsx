import React from 'react';
import BtnSearch from '../BtnSearch/BtnSearch.jsx';
import SearchInput from './SearchInput/SearchInput.jsx';
import SearchTitle from '../SearchTitle/SearchTitle.jsx';
import PropTypes from 'prop-types';

const Search = (props) => (
    <>
        <SearchTitle title={props.title}/>
        <SearchInput placeholder={props.placeholder}/>
        <BtnSearch text={props.text}/>
    </>
)

Search.propTypes ={
    title: PropTypes.string,
    text: PropTypes.string,
    placeholder: PropTypes.string
}

export default Search