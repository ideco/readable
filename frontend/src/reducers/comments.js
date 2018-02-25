import {LOAD_COMMENTS_REQUEST, LOAD_COMMENTS_SUCCESS, VOTE_COMMENT} from "../actions/comments";

const commentsDefaultState = {
    isLoading: true,
    comments: [],
};

export function comments(state = commentsDefaultState, action) {
    switch (action.type) {
        case LOAD_COMMENTS_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case LOAD_COMMENTS_SUCCESS:
            return {
                comments: action.response,
                isLoading: false
            };
        case VOTE_COMMENT:
            return {
                comments: state.comments.map((comment) => {
                    if (comment.id === action.comment.id) {
                        return action.comment;
                    }
                    return comment;
                })
            };
        default:
            return state;
    }
}