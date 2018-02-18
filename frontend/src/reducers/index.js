import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'
import {posts} from './posts';
import {categories, selectedCategory} from './categories'


export default combineReducers({
    routing: routerReducer,
    posts, categories, selectedCategory
});