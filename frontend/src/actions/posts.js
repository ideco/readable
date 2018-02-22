import {fetchPostDetails, fetchPosts, votePost} from '../utils/serverApi'

export const ALL_POSTS_LOADING = 'ALL_POSTS_LOADING';
export const LOAD_POSTS = 'LOAD_POSTS';
export const LOAD_SINGLE_POST = 'LOAD_SINGLE_POST';
export const POST_VOTING = 'POST_VOTING';
export const VOTE_POST = 'VOTE_POST';

export function loadPosts(category) {
    return (dispatch) => {
        dispatch({
            type: ALL_POSTS_LOADING
        });
        return fetchPosts(category)
            .then((posts) => dispatch({
                type: LOAD_POSTS,
                posts: posts.filter(post => !post.deleted),
                category
            }))
    }
}

export function loadSinglePost(category, id) {
    return (dispatch) => {
        dispatch({
            type: ALL_POSTS_LOADING
        });
        return fetchPostDetails(id)
        // TODO
            .then((post) => dispatch({
                type: LOAD_SINGLE_POST,
                post
            }))
    }
}

export function vote(postId, option) {
    return (dispatch) => {
        dispatch({
            type: POST_VOTING
        });
        return votePost(postId, option)
            .then((post) => dispatch({
                type: VOTE_POST,
                post
            }))
    }
}