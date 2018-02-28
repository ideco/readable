import * as api from "../api/postsApi";
import {arrayOfPosts} from "../store/schema";
import {v4} from 'uuid';

export const SORT_POSTS = 'SORT_POSTS';


export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

export function loadPosts(category) {
    return {
        types: [
            LOAD_POSTS_REQUEST,
            LOAD_POSTS_SUCCESS,
            LOAD_POSTS_FAILURE
        ],
        callAPI: () => api.fetchPosts(category),
        schema: arrayOfPosts,
        payload: {category},
    }
}

export function loadSinglePost(category, postId) {
    return {
        types: [
            LOAD_POSTS_REQUEST,
            LOAD_POSTS_SUCCESS,
            LOAD_POSTS_FAILURE
        ],
        callAPI: () => api.fetchSinglePost(category, postId),
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
        callAPI: () => api.votePost(postId, option),
        schema: arrayOfPosts,
        payload: {
            id: postId,
            voteType: 'post',
            option
        }
    }
}

export const UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';

export function addPost(data) {
    let postId = v4();
    return {
        types: [
            UPDATE_POST_REQUEST,
            UPDATE_POST_SUCCESS,
            UPDATE_POST_FAILURE
        ],
        callAPI: () => api.createPost(postId, data),
        schema: arrayOfPosts,
        payload: {
            postId,
            updateType: 'ADD'
        }
    }
}

export function editPost(postId, data) {
    return {
        types: [
            UPDATE_POST_REQUEST,
            UPDATE_POST_SUCCESS,
            UPDATE_POST_FAILURE
        ],
        callAPI: () => api.putPost(postId, data.title, data.body),
        schema: arrayOfPosts,
        payload: {
            postId,
            updateType: 'EDIT'
        }
    }
}

export function deletePost(postId) {
    return {
        types: [
            UPDATE_POST_REQUEST,
            UPDATE_POST_SUCCESS,
            UPDATE_POST_FAILURE
        ],
        callAPI: () => api.deletePost(postId),
        schema: arrayOfPosts,
        payload: {
            postId,
            updateType: 'DELETE'
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