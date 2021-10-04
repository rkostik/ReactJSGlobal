import React from 'react';
import styles from './MovieList.module.css';
import MovieCard from './MovieCard/MovieCard.jsx';


const MovieList = (props) => (
    <div className={styles.ml_container}>
        {props.list.map((item, index) => {
            return <MovieCard key={index} elem={item} editClick={props.editClick}/>
        })}
    </div>
)

export default MovieList