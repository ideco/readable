import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'
import {posts} from './posts';
import {categories, selectedCategory} from './categories'
import {comments} from "./comments";

export function createReducer(initialState, handlers) {
    return function reducer(state = initialState, action) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action)
        } else {
            return state
        }
    }
}

export default combineReducers({
    routing: routerReducer,
    posts,
    categories,
    selectedCategory,
    comments
});