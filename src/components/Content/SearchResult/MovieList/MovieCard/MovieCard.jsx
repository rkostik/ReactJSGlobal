import React from 'react';
import CardDetail from './CardDetail/CardDetail.jsx';
import styles from './CardDetail/CardDetail.module.css';
import PropTypes from 'prop-types';

const MovieCard = (props) => (
    <div>
        <div className={styles.card}>
            <div className={styles.circle}>
                <div className={styles.circle_list}>
                    <div className={styles.circle_list_item}></div>
                    <div className={styles.circle_list_item}></div>
                    <div className={styles.circle_list_item}></div>
                </div>
            </div>
            <img src={props.elem.url}/>
        </div>
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