import {shallow} from "enzyme";
import React from 'react';
import App from './App';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import {initialState} from '../const.js';
import configureStore from 'redux-mock-store';
import DDList from "./Content/DDList/DDList";
import thunk from 'redux-thunk';
import toJson from 'enzyme-to-json';


describe('app', () => {
    const middleware = [thunk];
    const mockStore = configureStore(middleware);
    let store;
    it('[APP] - #1. - render without crashing', () => {
        shallow(<App/>);
    });

    it('[APP] - #2. - renders correctly', () => {
        const tree = shallow(<App />);
        expect(toJson(tree)).toMatchSnapshot();
    });

    it('[SELECT FILTER OPTION] - #1. find correct drop down list values', () => {
        store = mockStore(initialState);
        const {getByText} = render(<Provider store={store}><DDList /></Provider>);
        expect(getByText('rating')).toBeTruthy();
        expect(getByText('release date')).toBeTruthy();
        expect(getByText('title')).toBeTruthy();
    });

    test('[SELECT FILTER OPTION] - #2. check correct selection ', () => {
        const { getByTestId, getAllByTestId } = render(<Provider store={store}><DDList /></Provider>);
        fireEvent.change(getByTestId('select'), { target: { value: 'rating' } })
        let options = getAllByTestId('select-option')
        expect(options[0].selected).toBeFalsy();
        expect(options[1].selected).toBeTruthy();
        expect(options[2].selected).toBeFalsy();
    })

})