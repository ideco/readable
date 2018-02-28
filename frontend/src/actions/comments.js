import *  as api from "../api/commentsApi";
import {v4} from 'uuid';
import {arrayOfComments} from "../store/schema";

export const LOAD_COMMENTS_REQUEST = 'LOAD_COMMENTS_REQUEST';
export const LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
export const LOAD_COMMENTS_FAILURE = 'LOAD_COMMENTS_FAILURE';
export function loadComments(postId) {
    return {
        types: [
            LOAD_COMMENTS_REQUEST,
            LOAD_COMMENTS_SUCCESS,
            LOAD_COMMENTS_FAILURE
        ],
        schema: arrayOfComments,
        callAPI: () => api.fetchComments(postId),
        payload: {postId},
    }
}

export const UPDATE_COMMENTS_REQUEST = 'UPDATE_COMMENTS_REQUEST';
export const UPDATE_COMMENTS_SUCCESS = 'UPDATE_COMMENTS_SUCCESS';
export const UPDATE_COMMENTS_FAILURE = 'UPDATE_COMMENTS_FAILURE';

export function addComment(postId, data) {
    const commentId = v4();
    return {
        types: [
            UPDATE_COMMENTS_REQUEST,
            UPDATE_COMMENTS_SUCCESS,
            UPDATE_COMMENTS_FAILURE
        ],
        schema: arrayOfComments,
        callAPI: () => api.addComment(postId, {
            id: commentId,
            parentId: postId,
            timestamp: Date.now(),
            ...data
        }),
        payload: {postId, commentId}
    }
}

export const VOTE_COMMENT_REQUEST = 'VOTE_COMMENT_REQUEST';
export const VOTE_COMMENT_SUCCESS = 'VOTE_COMMENT_SUCCESS';
export const VOTE_COMMENT_FAILURE = 'VOTE_COMMENT_FAILURE';
export function vote(commentId, option) {
    return {
        types: [
            VOTE_COMMENT_REQUEST,
            VOTE_COMMENT_SUCCESS,
            VOTE_COMMENT_FAILURE
        ],
        schema: arrayOfComments,
        callAPI: () => api.voteComment(commentId, option),
        payload: {
            id: commentId,
            voteType: 'comment',
            option
        },
    }
}