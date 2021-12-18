import React, {useCallback} from 'react';
import styles from './ModalMovie.module.css';
import Close from '../Confirmation/Close/Close.jsx';
import Calendar from 'react-calendar';
import {ADD_MOVIE_ARR} from '../../const';
import {useSelector, useDispatch} from 'react-redux';
import {
    closeAddMovieClick,
    openClick,
    changeDate,
    submitForm,
    resetForm,
    editSubmit
} from "../../store/actions/actionCreators";
import DropDownList from '../DropDownList/DropDownList.jsx';
import {Formik, Form, Field} from 'formik';
import btnStyle from '../Button/Button.module.css';
import {getDate, getDateReverse, stringToDate} from '../../utils/utils.js';
import {addMovieSchema} from './validationLogic.js';

const ModalEditMovie = () => {

    const activeCalendar = useSelector(state => state.activeCalendar);
    const calendarDate = useSelector(state => state.calendarDate);
    const movie=useSelector(state => state.movie);
    const dispatch = useDispatch();
    const onOpenClick = useCallback(() => {
        dispatch(openClick());
    }, []);
    const onCloseAddMovieClick = useCallback(() => {
        dispatch(closeAddMovieClick());
    }, []);
    const onChangeDate = useCallback((calendarDateIn, setFieldValue) => {
        setFieldValue('release_date', getDate(calendarDateIn));
        dispatch(changeDate(calendarDateIn));
    }, []);
    const onReset = useCallback(() => {
        dispatch(resetForm());
    }, []);
    const onSubmit = useCallback((values, {setSubmitting, resetForm, setFieldValue}, idVal) => {
        setFieldValue('id', idVal);
        dispatch(editSubmit(JSON.stringify(values, null, 2), idVal));
        setSubmitting(false);
    }, []);
    const title = ADD_MOVIE_ARR.title;
    const movie_url = 'poster_path';
    const rating = 'vote_average';
    const overview = 'overview';
    const runtime = ADD_MOVIE_ARR.runtime;
    const release_date = 'release_date';
    const genreName = ADD_MOVIE_ARR.genre;

    return (
        <div className={styles.addMovie_window}>
            <h1 className={styles.mainTitle}>
                {ADD_MOVIE_ARR.main_title_edit}
            </h1>
            <Close handleClick={() => onCloseAddMovieClick()}/>
            <Formik initialValues={{
                id:movie.id,
                title: movie.title,
                poster_path: movie.poster_path,
                vote_average: movie.vote_average,
                runtime: movie.runtime,
                overview: movie.overview,
                release_date: movie.release_date,
                genre:movie.genres
            }}
                    validationSchema={addMovieSchema}
                    onSubmit={onSubmit}
                    onReset={onReset}
            >
                {({isSubmitting, setFieldValue, errors, touched}) => (
                    <Form>
                        <div className={styles.main_block}>
                            <div className={styles.left_block}>
                                <label htmlFor={title}>{title}</label>
                                <Field className={styles.input} type='text' name={title}
                                       placeholder={ADD_MOVIE_ARR.title_default}/>
                                {errors.title && touched.title ? <div className={`${styles.error_message} ${styles.error_title}`}>{errors.title}</div> : null}
                                <label htmlFor={movie_url}>{ADD_MOVIE_ARR.movie_url}</label>
                                <Field type='text' className={styles.input} name={movie_url}
                                       placeholder={ADD_MOVIE_ARR.url_default}/>
                                {errors.poster_path && touched.poster_path ? <div className={`${styles.error_message} ${styles.error_url}`}>{errors.poster_path}</div> : null}
                                <label htmlFor={genreName}>{genreName}</label>
                                <div className={styles.select}>
                                    <Field as='div' name={genreName} />
                                    <DropDownList setFieldValue={setFieldValue}/>
                                </div>
                            </div>
                            <div className={styles.right_block}>
                                <label htmlFor={release_date}>{ADD_MOVIE_ARR.release_date}</label>
                                <Field as='div' name={release_date}>
                                    <div className={styles.date_select} name={release_date}>
                                        <div
                                            className={`${styles.text_default} ${styles.text_placeholder}`}>{calendarDate === null ? ADD_MOVIE_ARR.select_date : getDateReverse(calendarDate)}</div>
                                        <div className={styles.icon}><img src='images/calendar.png' alt=''
                                                                          onClick={() => onOpenClick()}/>
                                        </div>
                                    </div>
                                </Field>
                                <label htmlFor={rating}>{ADD_MOVIE_ARR.rating}</label>
                                <Field type='text' name={rating}
                                       placeholder={ADD_MOVIE_ARR.rating_default}/>
                                {errors.vote_average && touched.vote_average ? <div className={`${styles.error_message} ${styles.error_rating}`}>{errors.vote_average}</div> : null}
                                <label htmlFor={runtime}>{ADD_MOVIE_ARR.runtime}</label>
                                <Field type='text' name={runtime}
                                       placeholder={ADD_MOVIE_ARR.runtime_default}/>
                                {errors.runtime && touched.runtime ? <div className={`${styles.error_message} ${styles.error_runtime}`}>{errors.runtime}</div> : null}

                            </div>
                        </div>
                        <div className={styles.desc_block}>
                            <div className={styles.desc_block_label}><label
                                htmlFor={ADD_MOVIE_ARR.overview}>{ADD_MOVIE_ARR.overview}</label></div>
                            <Field component="textarea" name={overview} className={styles.desc_text}
                                   placeholder={ADD_MOVIE_ARR.overview_description}/>
                            {errors.overview && touched.overview ? <div><div className={`${styles.error_message} ${styles.error_overview}`}>{errors.overview}</div></div> : null}
                        </div>
                        <div className={styles.btn_block}>
                            <button type='reset'
                                    className={`${btnStyle.btn_block_black} ${btnStyle.btn_submit} ${btnStyle.txt_reset}`}>reset
                            </button>
                            <button type='submit'
                                    className={`${btnStyle.btn_block_coral} ${btnStyle.btn_submit} ${btnStyle.txt_confirm} `}
                                    disabled={isSubmitting}>submit
                            </button>
                        </div>
                        {<div className={`${styles.calendar_box} ${activeCalendar ? styles.active : styles.inactive}`}>
                            <Calendar className={styles.calendar} onChange={(value, e) => onChangeDate(value, setFieldValue)}
                                      value={calendarDate}/>
                        </div>}
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default ModalEditMovie