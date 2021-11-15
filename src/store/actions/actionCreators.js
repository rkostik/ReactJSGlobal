import axios from 'axios';
import actions from './actionTypes.js';
import {createActions, handleActions, combineActions} from 'redux-actions';
import {ADD_MOVIE_ARR, CONST_ARR} from '../../const.js';
import {stringToDate} from '../../utils/utils.js';


export const addMovieClick = () => ({
    type: actions.ADD_MOVIE_WIN,
    modalActive: true
})

export const searchClick = () => ({
    type: actions.SEARCH_MOVIE,
    viewActive: true
})

export const openClick = () => ({
    type: actions.OPEN_CLICK
})

export const closeAddMovieClick = () => ({
    type: actions.CLOSE_ADD_MOVIE,
    modalActive: false,
    typeWindow: 'add',
    activeCalendar: false
})

export const ddmCloseClick = () => {
    return ({
        type: actions.DDM_CLOSE_CLICK,
        ddmActive: false
    })
}


export const deleteClick = () => {
    return ({
        type: actions.DELETE_CLICK,
        deleteActive: true,
        ddmActive: false
    })
}

export const editClick = (val) => {
    return dispatch => {
        axios.get('http://localhost:4000/movies/'+val, {
        })
            .then(res => {
                dispatch(editMovieList(res.data));
            })
            .catch(err => {
                dispatch(populateMoviesListErr(err.message));
            });
    };
}

export const editMovieList = (data) => {
    return ({
        type: actions.EDIT_CLICK,
        editActive: true,
        typeWindow: 'edit',
        ddmActive: false,
        calendarDate: stringToDate(data.release_date),
        movie: data
    })
}

export const ddmOpenClick = (cardKey, isActive) => {
    return ({
        type: actions.DDM_OPEN_CLICK,
        item: cardKey,
        ddmActive: isActive
    })
}

export const editSubmit = (values) => {
    console.log(values);
    const dataMovie = JSON.parse(values);
    return dispatch => {
        axios.put('http://localhost:4000/movies', {
            id: dataMovie.id,
            title: dataMovie.title,
            poster_path: dataMovie.poster_path,
            vote_average: parseFloat(dataMovie.vote_average),
            runtime: parseInt(dataMovie.runtime, 10),
            overview: dataMovie.overview,
            release_date: dataMovie.release_date,
            genres: typeof dataMovie.genre === 'Array'?dataMovie.genre:dataMovie.genre.split(' ')
        })
            .then(res => {
            })
            .catch(err => {
                dispatch(populateMoviesListErr(err.message));
            });
        dispatch(closeAddMovieClick());
    };

}

export const movieClick = (cardKey, isActive) => {
    return ({
        type: actions.MOVIE_CLICK,
        item: cardKey,
        viewActive: false
    })
}

export const closeDelWindowClick = () => {
    return ({
        type: actions.DEL_WINDOW_CLICK,
        deleteActive: false
    })
}

export const onSortClick = (sortBy) => {
    return dispatch => {
        axios.get('http://localhost:4000/movies', {
            params: {
                sortBy: sortBy,
                limit: 6
            }
        })
            .then(res => {
                dispatch(populateMoviesList(res.data.data, res.data.totalAmount, sortBy));
            })
            .catch(err => {
                dispatch(populateMoviesListErr(err.message));
            });
    };
}

export const populateMoviesList = (movies, amount, sortBy) => {
    return ({
        type: actions.POPULATE_MOVIE_LIST,
        movies: movies,
        amount: amount,
        sortValue: sortBy
    })
}

export const populateMoviesListErr = (errMessage) => {
    return ({
        type: actions.POPULATE_MOVIE_LIST_ERR,
        errMessage: errMessage
    })
}

export const filterClick = (filterName) => {
    return dispatch => {
        axios.get('http://localhost:4000/movies', {
            params: {
                filter: filterName === CONST_ARR.FILTER_LIST[0] ? null : filterName,
                limit: 6
            }
        })
            .then(res => {
                dispatch(filterMovieList(res.data.data, res.data.totalAmount, filterName));
            })
            .catch(err => {
                dispatch(populateMoviesListErr(err.message));
            });
    };
}

export const filterMovieList = (movies, amount, filterName) => {
    return ({
        type: actions.FILTER_MOVIES,
        movies: movies,
        amount: amount,
        filterName: filterName
    })
}

export const changeDate = (date) => {
    return ({
        type: actions.CHANGE_DATE,
        calendarDate: date,
        activeCalendar: false
    })
}

export const changeSelect = (val) => {
    return ({
        type: actions.SELECT_GENRE,
        optionSelected: val
    })
}

export const resetForm = () => {
    return ({
        type: actions.RESET_FORM,
        calendarDate:null,
        optionSelected: ''
    })
}

export const submitForm = (values) => {
    const dataMovie = JSON.parse(values);
    return dispatch => {
        axios.post('http://localhost:4000/movies', {
            title: dataMovie.title,
            poster_path: dataMovie.poster_path,
            vote_average: parseFloat(dataMovie.vote_average),
            runtime: parseInt(dataMovie.runtime, 10),
            overview: dataMovie.overview,
            release_date: dataMovie.release_date,
            genres: dataMovie.genre.split(' ')
        })
            .then(res => {
                dispatch(afterSubmitForm());
            })
            .catch(err => {
                dispatch(populateMoviesListErr(err.message));
            });
        dispatch(closeAddMovieClick());
    };

}

export const afterSubmitForm = () => {
    return ({
        type: actions.AFTER_SUBMIT,
        calendarDate:null,
        optionSelected: '',
        completeActive: true
    })
}

export const closeConfirmClick = () => {
    return ({
        type: actions.CLOSE_CONFIRM_WIN,
        completeActive: false,
        deleteActive: false
    })
}

export const confirmDel = (val) => {
    console.log(' --- '+val);
    return dispatch => {
        axios.delete('http://localhost:4000/movies/'+val, {
        })
            .then(res => {
                dispatch(closeDelWindowClick());
                dispatch(filterClick('all'));
            })
            .catch(err => {
                dispatch(populateMoviesListErr(err.message));
            });
    };
}