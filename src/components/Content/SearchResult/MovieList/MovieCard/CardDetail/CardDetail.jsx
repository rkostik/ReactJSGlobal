import React from 'react';
import styles from './CardDetail.module.css';

const CardDetail = (props) => (
    <div className={styles.card_container}>
        <div className={styles.card_name}>{props.item.title}</div>
        <div className={styles.card_year}><div className={styles.style_year}>{props.item.year}</div></div>
    </div>
)

export default CardDetail