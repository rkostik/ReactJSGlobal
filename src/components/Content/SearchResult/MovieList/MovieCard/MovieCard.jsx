import React from 'react';
import CardDetail from './CardDetail/CardDetail.jsx';
import styles from './CardDetail/CardDetail.module.css';

const MovieCard = (props) => (
    <div>
        <div className={styles.card}>
            <div className={styles.circle} onClick={props.editClick}>
                <div className={styles.circle_list}>
                    <div className={styles.circle_list_item}/>
                    <div className={styles.circle_list_item}/>
                    <div className={styles.circle_list_item}/>
                </div>
            </div>
            <img src={props.elem.url} alt='Movie Screen'/>
        </div>
        <CardDetail item={props.elem}/>
        <div className={styles.card_genre}>{props.elem.genre}</div>
    </div>
)

export default MovieCard