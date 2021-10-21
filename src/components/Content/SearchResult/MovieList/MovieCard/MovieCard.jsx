import React from 'react';
import CardDetail from './CardDetail/CardDetail.jsx';
import styles from './CardDetail/CardDetail.module.css';
import DDMenu from '../../../DDMenu/DDMenu.jsx';

const MovieCard = (props) => (
    <div>
        <div className={styles.card}>
            <div className={styles.circle} onClick={e=>props.ddmOpenClick(props.cardKey)}>
                <div className={styles.circle_list}>
                    <div className={styles.circle_list_item}/>
                    <div className={styles.circle_list_item}/>
                    <div className={styles.circle_list_item}/>
                </div>
            </div>
            <DDMenu active={props.active} editClick={props.editClick} deleteClick={props.deleteClick}  itemKey={props.itemKey} ddmKey={props.cardKey}
                    closeClick={props.closeClick}/>
            <img src={props.elem.url} alt='Movie Screen' onClick={e=>props.movieClick(props.cardKey)}/>
        </div>
        <CardDetail item={props.elem}/>
        <div className={styles.card_genre}>{props.elem.genre}</div>
    </div>
)

export default MovieCard