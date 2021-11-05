import React, {useCallback} from 'react';
import styles from './ModalMovie.module.css';
import Close from '../Confirmation/Close/Close.jsx';
import Button from '../Button/Button.jsx';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {ADD_MOVIE_ARR} from '../../const';
import {useSelector,useDispatch} from 'react-redux';
import {closeAddMovieClick, openClick} from "../../store/actions/actionCreators";

const ModalMovie = () => {
    const typeWindow =useSelector(state=>state.typeWindow);
    const activeCalendar =useSelector(state=>state.activeCalendar);
    const dispatch = useDispatch();
    const onOpenClick = useCallback(() => {
        dispatch(openClick(activeCalendar));
    }, []);
    const onCloseAddMovieClick = useCallback(() => {
        dispatch(closeAddMovieClick());
    }, []);

  return  (
        <div className={styles.addMovie_window}>
            <h1 className={styles.mainTitle}>
                {typeWindow === 'add' ? ADD_MOVIE_ARR.main_title : ADD_MOVIE_ARR.main_title_edit}
            </h1>
            <Close handleClick={()=>onCloseAddMovieClick()}/>
            <form>
                <div className={styles.main_block}>
                    <div className={styles.left_block}>
                        <label htmlFor={ADD_MOVIE_ARR.title}>{ADD_MOVIE_ARR.title}</label>
                        <input type='text' name={ADD_MOVIE_ARR.title}
                               placeholder={ADD_MOVIE_ARR.title_default}/>
                        <label htmlFor={ADD_MOVIE_ARR.movie_url}>{ADD_MOVIE_ARR.movie_url}</label>
                        <input type='text' name={ADD_MOVIE_ARR.movie_url}
                               placeholder={ADD_MOVIE_ARR.url_default}/>
                        <label htmlFor={ADD_MOVIE_ARR.genre}>{ADD_MOVIE_ARR.genre}</label>
                        <div className={styles.select}>
                            <div className={styles.text_default}>{ADD_MOVIE_ARR.select_default}</div>
                            <div className={styles.icon}><img src='images/rd.png' alt=''/></div>
                        </div>
                    </div>
                    <div className={styles.right_block}>
                        <label htmlFor={ADD_MOVIE_ARR.release_date}>{ADD_MOVIE_ARR.release_date}</label>
                        <div className={styles.date_select} name={ADD_MOVIE_ARR.release_date}>
                            <div
                                className={`${styles.text_default} ${styles.text_placeholder}`}>{ADD_MOVIE_ARR.select_date}</div>
                            <div className={styles.icon}><img src='images/calendar.png' alt=''
                                                              onClick={()=>onOpenClick()}/>
                            </div>
                        </div>
                        <label htmlFor={ADD_MOVIE_ARR.rating}>{ADD_MOVIE_ARR.rating}</label>
                        <input type='text' name={ADD_MOVIE_ARR.rating}
                               placeholder={ADD_MOVIE_ARR.rating_default}/>
                        <label htmlFor={ADD_MOVIE_ARR.runtime}>{ADD_MOVIE_ARR.runtime}</label>
                        <input type='text' name={ADD_MOVIE_ARR.runtime}
                               placeholder={ADD_MOVIE_ARR.runtime_default}/>

                    </div>
                </div>
                <div className={styles.desc_block}>
                    <div className={styles.desc_block_label}><label
                        htmlFor={ADD_MOVIE_ARR.overview}>{ADD_MOVIE_ARR.overview}</label></div>
                    <textarea name={ADD_MOVIE_ARR.overview} className={styles.desc_text}
                              placeholder={ADD_MOVIE_ARR.overview_description}></textarea>
                </div>
                <div className={styles.btn_block}>
                    <Button btn_block_style='btn_block_black' btn_style='btn_submit' txt_style='txt_reset'
                            textBtn='reset'/>
                    <Button btn_block_style='btn_block_coral' btn_style='btn_submit' txt_style='txt_confirm'
                            textBtn='submit'/>
                </div>
                <div className={`${styles.calendar_box} ${activeCalendar ? styles.active : styles.inactive}`}>
                    <Calendar className={styles.calendar}/>
                </div>
            </form>
        </div>
    )
}

export default ModalMovie