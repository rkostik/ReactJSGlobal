import React from 'react';
import CardDetail from './CardDetail/CardDetail.jsx';
import styles from './CardDetail/CardDetail.module.css';
import PropTypes from 'prop-types';

const MovieCard = (props) => (
    <div>
        <img src={props.elem.url}/>
        <CardDetail item={props.elem}/>
        <div className={styles.card_genre}>{props.elem.genre}</div>
    </div>
)

MovieCard.propTypes = {
    elem: PropTypes.shape({
        url: PropTypes.string,
        genre: PropTypes.string
    })
}

export default MovieCard