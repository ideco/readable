import {
    LOAD_COMMENTS_FAILURE,
    LOAD_COMMENTS_REQUEST,
    LOAD_COMMENTS_SUCCESS,
    VOTE_COMMENT_SUCCESS
} from "../actions/comments";
import {createReducer} from "./index";


const commentsInitialState = {
    commentsLoading: true,
    byId: {},
    error: null
};

export const comments = createReducer(commentsInitialState, {
    [LOAD_COMMENTS_REQUEST](state, action) {
        return {
            ...state,
            commentsLoading: true,
            error: null,
        };
    },
    [LOAD_COMMENTS_SUCCESS](state, action) {
        return {
            byId: action.response.entities.comments,
            commentsLoading: false,
            error: null,
        };
    },
    [LOAD_COMMENTS_FAILURE](state, action) {
        return {
            ...state,
            commentsLoading: false,
            error: action.error,
        };
    },
    [VOTE_COMMENT_SUCCESS](state, action) {
        // since the voting api returns the whole post, we might as
        // well update the state
        return {
            ...state,
            byId: {
                ...state.byId,
                [action.id]: action.response.entities.comments[action.id]
            }
        };
    },
});