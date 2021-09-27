import React from 'react';
import MovieListCSS from './MovieList.module.css';
import MovieCard from './MovieCard/MovieCard.jsx';

const MovieList = (props) => (
    <div className={MovieListCSS.ml_container}>
        {props.arr.map((item,index) => {
            return  <MovieCard key={index} elem={item}/>
        })}
    </div>
)

export default MovieList