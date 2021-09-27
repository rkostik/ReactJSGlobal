import React from 'react';
import CardDetailCSS from './CardDetail.module.css';

const CardDetail = (props) => (
    <div className={CardDetailCSS.card_container}>
        <div className={CardDetailCSS.div_name}>{props.item.title}</div>
        <div className={CardDetailCSS.div_year}><div className={CardDetailCSS.h1_card}>{props.item.year}</div></div>
    </div>
)

export default CardDetail