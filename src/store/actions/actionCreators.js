import axios from 'axios';
import actions from './actionTypes.js';
import {createActions, handleActions, combineActions} from 'redux-actions';
import {ADD_MOVIE_ARR, CONST_ARR} from '../../const.js';

export const addMovieClick = () => ({
    type: actions.ADD_MOVIE_WIN,
    modalActive: true
})

export const searchClick = () => ({
    type: actions.SEARCH_MOVIE,
    viewActive: true
})

export const openClick = (active) => ({
    type: actions.OPEN_CLICK,
    activeCalendar: active
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

export const editClick = () => {
    return ({
        type: actions.EDIT_CLICK,
        modalActive: true,
        typeWindow: 'edit',
        ddmActive: false
    })
}

export const ddmOpenClick = (cardKey, isActive) => {
    return ({
        type: actions.DDM_OPEN_CLICK,
        item: cardKey,
        ddmActive: isActive
    })
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
                filter: filterName === CONST_ARR.FILTER_LIST[0]?null:filterName,
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