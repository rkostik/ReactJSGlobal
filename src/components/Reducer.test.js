import {shallow} from "enzyme";
import React from 'react';
import App from './App';
import data from '../jest/mockData.js';
import {
    addMovieClick,
    closeAddMovieClick,
    ddmCloseClick,
    editMovieList
} from '../store/actions/actionCreators';
import headerReducer from '../store/reducers/headerReducer.js';
import {initialState} from '../const.js';
import {stringToDate} from '../utils/utils.js';


it('render without crashing',()=>{
    shallow(<App/>);
});

describe('test reducer', () => {
    it('returns the same state on an unhandled action', () => {
        expect(headerReducer(initialState, {type: '_NULL'})).toMatchSnapshot();
    });

    it('handles ADD_MOVIE_WIN action', () => {
        expect(headerReducer(initialState, addMovieClick())).toEqual({
            ...initialState,
            modalActive: true
        });

    });

    it('handles CLOSE_ADD_MOVIE action', () => {

        expect(headerReducer(initialState, closeAddMovieClick())).toEqual({
            ...initialState,
            modalActive: false,
            typeWindow: 'add',
            activeCalendar: false
        });

    });

    it('handles DDM_CLOSE_CLICK action', () => {

        expect(headerReducer(initialState, ddmCloseClick())).toEqual({
            ...initialState,
            ddmActive: false
        });

    });

    it('handles EDIT_CLICK action', () => {

        expect(headerReducer(initialState, editMovieList(data))).toEqual({
            ...initialState,
            editActive: true,
            typeWindow: 'edit',
            ddmActive: false,
            calendarDate: stringToDate(data.release_date),
            movie: data
        });

    });

})
