import {LOAD_CATEGORIES} from '../actions/categories'
import {LOAD_POSTS} from "../actions/posts";

export function categories(state = [], action) {
    switch (action.type) {
        case LOAD_CATEGORIES:
            return action.categories;
        default:
            return state;
    }
}

export function selectedCategory(state = null, action) {
    switch (action.type) {
        case LOAD_POSTS:
            return action.category ? action.category : null;
        default:
            return state;
    }
}