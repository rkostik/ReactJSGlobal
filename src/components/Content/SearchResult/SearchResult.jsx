import React from 'react';
import {SEARCH_RESULT, MOVIES} from '../../../const.js';
import Amount from "./Amount/Amount.jsx";
import MovieList from './MovieList/MovieList.jsx';


const SearchResult = (props) => (
    <>
        <Amount amount={'6'} text={SEARCH_RESULT}/>
        <MovieList arr={MOVIES}/>
    </>
)

export default SearchResult