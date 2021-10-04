import React from 'react';
import styles from './ModalMovie.module.css';
import Close from '../Confirmation/Close/Close.jsx';
import Button from '../Button/Button.jsx';

const ModalMovie = (props) => (
    <div className={styles.addMovie_window}>
        <h1 className={styles.mainTitle}>
            {props.type === 'add' ? props.add_movie_arr.main_title : props.add_movie_arr.main_title_edit}
        </h1>
        <Close handleClick={props.handleClick}/>
        <form>
            <div className={styles.main_block}>
                <div className={styles.left_block}>
                    <label htmlFor={props.add_movie_arr.title}>{props.add_movie_arr.title}</label>
                    <input type='text' name={props.add_movie_arr.title}
                           placeholder={props.add_movie_arr.title_default}/>
                    <label htmlFor={props.add_movie_arr.movie_url}>{props.add_movie_arr.movie_url}</label>
                    <input type='text' name={props.add_movie_arr.movie_url}
                           placeholder={props.add_movie_arr.url_default}/>
                    <label htmlFor={props.add_movie_arr.genre}>{props.add_movie_arr.genre}</label>
                    <div className={styles.select}>
                        <div className={styles.text_default}>{props.add_movie_arr.select_default}</div>
                        <div className={styles.icon}><img src='images/rd.png' alt=''/></div>
                    </div>
                </div>
                <div className={styles.right_block}>
                    <label htmlFor={props.add_movie_arr.release_date}>{props.add_movie_arr.release_date}</label>
                    <div className={styles.date_select} name={props.add_movie_arr.release_date}>
                        <div className={`${styles.text_default} ${styles.text_placeholder}`}>{props.add_movie_arr.select_date}</div>
                        <div className={styles.icon}><img src='images/calendar.png' alt=''/></div>
                    </div>
                    <label htmlFor={props.add_movie_arr.rating}>{props.add_movie_arr.rating}</label>
                    <input type='text' name={props.add_movie_arr.rating}
                           placeholder={props.add_movie_arr.rating_default}/>
                    <label htmlFor={props.add_movie_arr.runtime}>{props.add_movie_arr.runtime}</label>
                    <input type='text' name={props.add_movie_arr.runtime}
                           placeholder={props.add_movie_arr.runtime_default}/>

                </div>
            </div>
            <div className={styles.desc_block}>
                <div className={styles.desc_block_label}><label
                    htmlFor={props.add_movie_arr.overview}>{props.add_movie_arr.overview}</label></div>
                <textarea name={props.add_movie_arr.overview} className={styles.desc_text}
                          placeholder={props.add_movie_arr.overview_description}></textarea>
            </div>
            <div className={styles.btn_block}>
                <Button btn_block_style='btn_block_black' btn_style='btn_submit' txt_style='txt_reset' textBtn='reset'/>
                <Button btn_block_style='btn_block_coral' btn_style='btn_submit' txt_style='txt_confirm'
                        textBtn='submit'/>
            </div>
        </form>
    </div>
)

export default ModalMovie