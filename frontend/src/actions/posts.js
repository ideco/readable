import {votePost} from '../utils/serverApi'
import {fetchPosts} from "../utils/postsApi";

export const LOAD_POSTS = 'LOAD_POSTS';
export const VOTE_POST = 'VOTE_POST';
export const SORT = 'SORT';


export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

export function loadPosts(category, postId) {
    return {
        types: [
            LOAD_POSTS_REQUEST,
            LOAD_POSTS_SUCCESS,
            LOAD_POSTS_FAILURE
        ],
        callAPI: () => fetchPosts(category, postId),
        payload: {category, postId}
    }
}

export const VOTE_POSTS_REQUEST = 'VOTE_POSTS_REQUEST';
export const VOTE_POSTS_SUCCESS = 'VOTE_POSTS_SUCCESS';
export const VOTE_POSTS_FAILURE = 'VOTE_POSTS_FAILURE';

export function vote(postId, option) {
    return {
        types: [
            VOTE_POSTS_REQUEST,
            VOTE_POSTS_SUCCESS,
            VOTE_POSTS_FAILURE
        ],
        callAPI: () => votePost(postId, option),
        payload: {postId, option}
    }
}

export function sortBy(property) {
    return (dispatch) => {
        dispatch({
            type: SORT,
            sort: property
        })
    }

}