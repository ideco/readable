import {fetchPosts, votePost} from "../api/postsApi";
import {arrayOfPosts} from "../store/schema";

export const LOAD_POSTS = 'LOAD_POSTS';
export const SORT_POSTS = 'SORT_POSTS';


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
        schema: arrayOfPosts,
        payload: {category, postId},
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
        schema: arrayOfPosts,
        payload: {
            id: postId,
            option
        }
    }
}

export function sortBy(property) {
    return (dispatch) => {
        dispatch({
            type: SORT_POSTS,
            property
        })
    }

}