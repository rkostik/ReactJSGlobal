import React from 'react';
import CardDetail from './CardDetail/CardDetail.jsx';
import CardDetailCSS from './CardDetail/CardDetail.module.css';

const MovieCard = (props) => (
    <div >
        <img src={props.elem.url}/>
        <CardDetail item={props.elem}/>
        <div className={CardDetailCSS.div_genre}>{props.elem.genre}</div>
    </div>
)

export default MovieCard