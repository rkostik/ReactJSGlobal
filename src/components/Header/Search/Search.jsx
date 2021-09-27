import React from 'react';
import Button from "../Button/Button.jsx";
import Text from "../Text/Text.jsx";
import SearchInput from "./SearchInput/SearchInput.jsx";
import PropTypes from 'prop-types';

const Search = (props) => (
    <>
        <SearchInput title='What dod you want to watch?'/>
        <Button/>
        <Text name={props.name}/>
    </>
)

Search.propTypes ={
    name: PropTypes.string
}

export default Search