import {COMMENTS_LOADING, LOAD_COMMENTS} from "../actions/comments";

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
        default:
            return state;
    }
}