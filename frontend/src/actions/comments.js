import {fetchComments, voteComment} from "../utils/serverApi";

export const COMMENTS_LOADING = 'COMMENTS_LOADING';
export const LOAD_COMMENTS = 'LOAD_COMMENTS';
export const COMMENT_VOTING = 'COMMENT_VOTING';
export const VOTE_COMMENT = 'VOTE_COMMENT';

export function loadComments(postId) {
    return (dispatch) => {
        dispatch({
            type: COMMENTS_LOADING
        });
        return fetchComments(postId)
            .then((comments) => dispatch({
                type: LOAD_COMMENTS,
                comments
            }))
    }
}

export function vote(commentId, option) {
    return (dispatch) => {
        dispatch({
            type: COMMENT_VOTING
        });
        return voteComment(commentId, option)
            .then((comment) => dispatch({
                type: VOTE_COMMENT,
                comment
            }))
    }
}