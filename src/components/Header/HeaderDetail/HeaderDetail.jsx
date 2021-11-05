import React, { useCallback } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import LogoThin from "../Logo/LogoThin.jsx";
import styles from './HeaderDetail.module.css';
import PropTypes from "prop-types";
import {searchClick} from '../../../store/actions/actionCreators.js';
import {genreConcat, getYear, timestampToString} from '../../../utils/utils.js';

const HeaderDetail = () => {
    const movies = useSelector(state=>state.movies);
    const item = useSelector(state=>state.item);
    const dispatch = useDispatch();
    const onSearchClick = useCallback(() => {
        dispatch(searchClick());
    }, []);
    const genre =  genreConcat(movies[item].genres);
    const year = getYear(movies[item].release_date);
    const runtime = timestampToString(movies[item].runtime);
    return(
    <div className={styles.wrap_detail}>
        <div className={styles.detail_view}>
            <LogoThin/>
            <div className={styles.round} onClick={onSearchClick}></div>
            <div className={styles.slash}></div>
            <div className={styles.movie_block}>
                <div className={styles.card_screen}>
                    <img className={styles.img_block} src={movies[item].poster_path} alt=''/>
                </div>
                <div className={styles.description_block}>
                    <div className={styles.title_block}>
                        <div className={styles.movie_title}>
                            <div>{movies[item].title}</div>
                        </div>
                        <div className={styles.rating}>
                            <div className={styles.rating_value}>{movies[item].vote_average}</div>
                        </div>
                    </div>
                    <div className={styles.genre_block}>
                        {genre}
                    </div>
                    <div className={styles.param_block}>
                        <div>{year}</div>
                        <div>{runtime}</div>
                    </div>
                    <div className={styles.text_block}>
                        <div className={styles.txt}>{movies[item].overview}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}
HeaderDetail.propTypes = {
    arrConst: PropTypes.objectOf(PropTypes.string)
}

export default HeaderDetail