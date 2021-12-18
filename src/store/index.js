import rootReducer from '../store/reducers/reducers.js';
import {createStore,applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import * as actionCreators from '../store/actions/actionCreators.js';
import { composeWithDevTools } from 'redux-devtools-extension';
import {initialState} from "../const";
import headerReducer from "./reducers/headerReducer";

const composeEnhancers = composeWithDevTools({
    actionCreators,
    trace: true,
    traceLimit: 25,
})


const store= createStore(headerReducer, {...window.PRELOAD_STATE});


export default store