import React from 'react';
import styles from './MovieList.module.css';
import MovieCard from './MovieCard/MovieCard.jsx';


const MovieList = (props) => (
    <div className={styles.ml_container}>
        {props.movies.map((item, index) => {
            return <MovieCard key={index} elem={item} editClick={props.editClick} deleteClick={props.deleteClick}
                              movieClick={props.movieClick} active={props.active}
                              ddmOpenClick={props.ddmOpenClick} closeClick={props.closeClick} cardKey={index}
                              itemKey={props.itemKey}/>
        })}
    </div>
)


export default MovieList