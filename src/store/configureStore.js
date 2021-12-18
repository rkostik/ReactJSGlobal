import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import headerReducer from './reducers/headerReducer.js';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as actionCreators from '../store/actions/actionCreators.js';

const composeEnhancers = composeWithDevTools({
    actionCreators,
    trace: true,
    traceLimit: 25,
})


export default (initialState) => {

    const store= createStore(headerReducer, initialState, composeEnhancers(applyMiddleware(thunkMiddleware)));

    return store;
}