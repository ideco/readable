import {fetchComments, voteComment} from "../api/commentsApi";

export const COMMENTS_LOADING = 'COMMENTS_LOADING';
export const COMMENT_VOTING = 'COMMENT_VOTING';
export const VOTE_COMMENT = 'VOTE_COMMENT';

export const LOAD_COMMENTS_REQUEST = 'LOAD_COMMENTS_REQUEST';
export const LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
export const LOAD_COMMENTS_FAILURE = 'LOAD_COMMENTS_SUCCESS';
export function loadComments(postId) {
    return {
        types: [
            LOAD_COMMENTS_REQUEST,
            LOAD_COMMENTS_SUCCESS,
            LOAD_COMMENTS_FAILURE
        ],
        callAPI: () => fetchComments(postId),
        payload: {postId},
    }
}

export function vote(commentId, option) {
    return (dispatch) => {
        dispatch({
            type: COMMENT_VOTING
        });
        return voteComment(commentId, option)
            .then(comment => {
                console.log(comment);
                return comment;
            })
            .then((comment) => dispatch({
                type: VOTE_COMMENT,
                comment
            }))
    }
}