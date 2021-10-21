import React from 'react';
import BtnSearch from './BtnSearch/BtnSearch.jsx';
import SearchInput from './SearchInput/SearchInput.jsx';
import SearchTitle from './SearchTitle/SearchTitle.jsx';

const Search = (props) => (
    <>
        <SearchTitle title={props.title}/>
        <SearchInput placeholder={props.placeholder}/>
        <BtnSearch text={props.text}/>
    </>
)

export default Search