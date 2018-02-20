import {fetchComments} from "../utils/serverApi";

export const COMMENTS_LOADING = 'COMMENTS_LOADING';
export const LOAD_COMMENTS = 'LOAD_COMMENTS';

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