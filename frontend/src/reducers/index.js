import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'
import {posts, selectedPost} from './posts';
import {categories, selectedCategory} from './categories'
import {comments} from "./comments";


export default combineReducers({
    routing: routerReducer,
    posts,
    selectedPost,
    categories,
    selectedCategory,
    comments
});