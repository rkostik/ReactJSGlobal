import React from 'react';
import styles from './MovieList.module.css';
import MovieCard from './MovieCard/MovieCard.jsx';
import PropTypes from 'prop-types';


const MovieList = (props) => (
    <div className={styles.ml_container}>
        {props.list.map((item, index) => {
            return <MovieCard key={index} elem={item}/>
        })}
    </div>
)

MovieList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        genre: PropTypes.string,
        year: PropTypes.string,
        description: PropTypes.string,
        url: PropTypes.string
    }))
}

export default MovieList