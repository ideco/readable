import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'
import {posts} from './posts';
import {categories, selectedCategory} from './categories'
import {comments} from "./comments";


export default combineReducers({
    routing: routerReducer,
    posts,
    categories,
    selectedCategory,
    comments
});