import {initialState, initStateHeader} from '../../const.js';
import actions from '../actions/actionTypes.js';

const headerReducer = (state = {}, action) => {
    switch (action.type) {
        case actions.ADD_MOVIE_WIN:
            return {
                ...state,
                modalActive: action.modalActive
            }
        case actions.SEARCH_MOVIE:
            return {
                ...state,
                viewActive: action.viewActive
            }
        case actions.CLOSE_ADD_MOVIE:
            return {
                ...state,
                typeWindow: action.typeWindow,
                modalActive: action.modalActive,
                activeCalendar: action.activeCalendar
            }
        case actions.OPEN_CLICK:
            return {
                ...state,
                activeCalendar: !state.activeCalendar
            }
        case actions.DDM_CLOSE_CLICK:
            return {
                ...state,
                //deleteActive: action.deleteActive,
                ddmActive: action.ddmActive
            }
        case actions.DDM_OPEN_CLICK:
            return {
                ...state,
                item: action.item,
                ddmActive: !action.ddmActive
            }
        case actions.MOVIE_CLICK:
            return {
                ...state,
                item: action.item,
                viewActive: action.viewActive
            }
        case actions.EDIT_CLICK:
            return {
                ...state,
                editActive: action.editActive,
                typeWindow: action.typeWindow,
                ddmActive: action.ddmActive,
                calendarDate: action.calendarDate,
                movie:action.movie
            }
        case actions.DEL_WINDOW_CLICK:
            return {
                ...state,
                item: action.item,
                deleteActive: action.deleteActive
            }
        case actions.DELETE_CLICK:
            return {
                ...state,
                deleteActive: action.deleteActive,
                ddmActive: action.ddmActive
            }
        case actions.DEL_WINDOW_CLICK:
            return {
                ...state,
                deleteActive: action.deleteActive
            }
        case actions.POPULATE_MOVIE_LIST:
            return {
                ...state,
                movies: action.movies,
                amount: action.amount,
                sortValue: action.sortValue
            }
        case actions.FILTER_MOVIES:
            return {
                ...state,
                movies: action.movies,
                amount: action.amount,
                filterName: action.filterName
            }
        case actions.POPULATE_MOVIE_LIST_ERR:
            return {
                ...state,
                errMessage: action.errMessage
            }
        case actions.CHANGE_DATE:
            return {
                ...state,
                calendarDate: action.calendarDate,
                activeCalendar: action.activeCalendar
            }
        case actions.SELECT_GENRE:
            return {
                ...state,
                optionSelected: action.optionSelected
            }
        case actions.RESET_FORM:
            return {
                ...state,
                calendarDate: action.calendarDate,
                optionSelected: action.optionSelected
            }
        case actions.AFTER_SUBMIT:
            return {
                ...state,
                calendarDate: action.calendarDate,
                optionSelected: action.optionSelected,
                completeActive: action.completeActive
            }
        case actions.CLOSE_CONFIRM_WIN:
            return {
                ...state,
                completeActive: action.completeActive,
                deleteActive: action.deleteActive
            }
        case actions.SET_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.searchText
            }
        default:
            return state
    }
}

export default headerReducer