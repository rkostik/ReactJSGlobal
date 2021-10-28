import React from 'react';
import Amount from "./Amount/Amount.jsx";
import MovieList from './MovieList/MovieList.jsx';
import PropTypes from "prop-types";


const SearchResult = () => (
    <>
        <Amount/>
        <MovieList/>
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