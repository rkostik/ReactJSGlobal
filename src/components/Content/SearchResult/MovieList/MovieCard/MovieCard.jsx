import React, {useCallback} from 'react';
import CardDetail from './CardDetail/CardDetail.jsx';
import styles from './CardDetail/CardDetail.module.css';
import DDMenu from '../../../DDMenu/DDMenu.jsx';
import {useDispatch, useSelector} from 'react-redux';
import {ddmOpenClick, movieClick} from "../../../../../store/actions/actionCreators";
import {genreConcat} from '../../../../../utils/utils.js';

const MovieCard = (props) => {
    const ddmActive = useSelector(state => state.ddmActive);
    const viewActive = useSelector(state => state.viewActive);
    const dispatch = useDispatch();
    const onDdmOpenClick = useCallback(() => {
        dispatch(ddmOpenClick(props.cardKey, ddmActive));
    }, []);
    const onMovieClick = useCallback(() => {
        dispatch(movieClick(props.cardKey, viewActive));
    }, []);
    return (
        <div>
            <div className={styles.card}>
                <div className={styles.card_screen}>
                <div className={styles.circle} onClick={onDdmOpenClick}>
                    <div className={styles.circle_list}>
                        <div className={styles.circle_list_item}/>
                        <div className={styles.circle_list_item}/>
                        <div className={styles.circle_list_item}/>
                    </div>
                </div>
                    <DDMenu ddmKey={props.cardKey} idMovie={props.elem.id}/>
                    <img className={styles.img_block} src={props.elem.poster_path} alt=''
                         onClick={() => onMovieClick()}/>
                </div>
            </div>
            <CardDetail item={props.elem}/>
            <div className={styles.card_genre}>{genreConcat(props.elem.genres)}</div>
        </div>
    )
}

export default MovieCard