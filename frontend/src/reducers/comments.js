import {COMMENTS_LOADING, LOAD_COMMENTS, VOTE_COMMENT} from "../actions/comments";

const commentsDefaultState = {
    isLoading: true,
    comments: [],
};

export function comments(state = commentsDefaultState, action) {
    switch (action.type) {
        case COMMENTS_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case LOAD_COMMENTS:
            return {
                comments: action.comments,
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