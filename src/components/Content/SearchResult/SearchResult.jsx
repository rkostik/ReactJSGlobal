import React from 'react';
import Amount from "./Amount/Amount.jsx";
import MovieList from './MovieList/MovieList.jsx';
import PropTypes from "prop-types";


const SearchResult = (props) => (
    <>
        <Amount amount={props.amount} text={props.text}/>
        <MovieList list={props.list} editClick={props.editClick}/>
    </>
)

SearchResult.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
        description: PropTypes.string,
        url: PropTypes.string.isRequired
    }))
}

export default SearchResult