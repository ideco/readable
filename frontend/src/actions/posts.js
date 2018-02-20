import {fetchPostDetails, fetchPosts} from '../utils/serverApi'

export const ALL_POSTS_LOADING = 'ALL_POSTS_LOADING';
export const SELECTED_POST_LOADING = 'SELECTED_POST_LOADING';
export const LOAD_POSTS = 'LOAD_POSTS';
export const LOAD_SINGLE_POST = 'LOAD_SINGLE_POST';

export function loadPosts(category) {
    return (dispatch) => {
        dispatch({
            type: ALL_POSTS_LOADING
        });
        return fetchPosts(category)
            .then((posts) => dispatch({
                type: LOAD_POSTS,
                posts,
                category
            }))
    }
}

export function loadSinglePost(id) {
    return (dispatch) => {
        dispatch({
            type: SELECTED_POST_LOADING
        });
        return fetchPostDetails(id)
            .then((post) => dispatch({
                type: LOAD_SINGLE_POST,
                post
            }))
    }
}