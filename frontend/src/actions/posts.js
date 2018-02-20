import {fetchPostDetails, fetchPosts} from '../utils/serverApi'

export const LOADING = 'LOADING';
export const LOAD_POSTS = 'LOAD_POSTS';
export const LOAD_SINGLE_POST = 'LOAD_SINGLE_POST';

export function loadPosts(category) {
    return (dispatch) => {
        dispatch({
            type: LOADING
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
            type: LOADING
        });
        return fetchPostDetails(id)
            .then((post) => dispatch({
                type: LOAD_SINGLE_POST,
                post
            }))
    }
}