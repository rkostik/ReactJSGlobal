import React from 'react';
import styles from './MovieList.module.css';
import MovieCard from './MovieCard/MovieCard.jsx';
import {useSelector, useDispatch} from 'react-redux';


const MovieList = () => {
    const movies = useSelector(state => state.movies);
    return (
        <div className={styles.ml_container}>
            {movies.map((item, index) => {
                    return <MovieCard key={index} elem={item} cardKey={index}/>
                }
            )}
        </div>
    )
}


export default MovieList