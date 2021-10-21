import React from 'react';
import Amount from "./Amount/Amount.jsx";
import MovieList from './MovieList/MovieList.jsx';
import PropTypes from "prop-types";


const SearchResult = (props) => (
    <>
        <Amount amount={props.amount} text={props.text}/>
        <MovieList movies={props.movies} editClick={props.editClick} deleteClick={props.deleteClick}
               movieClick={props.movieClick}  active={props.active} ddmOpenClick={props.ddmOpenClick} closeClick={props.closeClick} itemKey={props.itemKey}/>
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