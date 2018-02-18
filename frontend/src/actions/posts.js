import {fetchPosts} from '../utils/serverApi'

export const LOAD_POSTS = 'LOAD_POSTS';

export function loadPosts(category) {
    return (dispatch) => {
        fetchPosts(category)
            .then((posts) => dispatch({
                type: LOAD_POSTS,
                posts,
                category
            }))
    }
}
