import {fetchComments, voteComment} from "../api/commentsApi";
import {arrayOfComments} from "../store/schema";

export const COMMENTS_LOADING = 'COMMENTS_LOADING';
export const COMMENT_VOTING = 'COMMENT_VOTING';
export const VOTE_COMMENT = 'VOTE_COMMENT';

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
        callAPI: () => fetchComments(postId),
        payload: {postId},
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
        callAPI: () => voteComment(commentId, option),
        payload: {
            id: commentId,
            voteType: 'comment',
            option
        },
    }
}