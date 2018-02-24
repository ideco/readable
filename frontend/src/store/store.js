import {applyMiddleware, compose, createStore} from 'redux';
import {routerMiddleware} from 'react-router-redux'
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory'
import rootReducer from '../reducers';
import {apiCall} from "./apiCall";

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [
    thunk,
    apiCall,
    routerMiddleware(history)
];

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers
);

export default store