import {
    LOAD_COMMENTS_FAILURE,
    LOAD_COMMENTS_REQUEST,
    LOAD_COMMENTS_SUCCESS,
    UPDATE_COMMENTS_FAILURE,
    UPDATE_COMMENTS_REQUEST,
    UPDATE_COMMENTS_SUCCESS,
    VOTE_COMMENT_SUCCESS
} from "../actions/comments";
import {createReducer} from "./index";


const commentsInitialState = {
    commentsLoading: true,
    commentsUpdating: false,
    lastUpdate: {},
    byId: {},
    error: null
};

export const comments = createReducer(commentsInitialState, {
    [LOAD_COMMENTS_REQUEST](state, action) {
        return {
            ...state,
            commentsLoading: true,
            commentsUpdating: false,
            lastUpdate: {},
            error: null,
        };
    },
    [LOAD_COMMENTS_SUCCESS](state, action) {
        return {
            byId: action.response.entities.comments,
            commentsLoading: false,
            commentsUpdating: false,
            lastUpdate: {},
            error: null,
        };
    },
    [LOAD_COMMENTS_FAILURE](state, action) {
        return {
            ...state,
            commentsLoading: false,
            commentsUpdating: false,
            lastUpdate: {},
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
            },
            commentsUpdating: false,
            lastUpdate: {},
        };
    },
    [UPDATE_COMMENTS_REQUEST](state, action) {
        return {
            ...state,
            commentsUpdating: true,
            lastUpdate: {},
        };
    },
    [UPDATE_COMMENTS_SUCCESS](state, action) {
        let updatedCommentId = action.id;
        return {
            ...state,
            byId: {
                ...state.byId,
                [updatedCommentId]: action.response.entities.comments[updatedCommentId]
            },
            commentsUpdating: false,
            lastUpdate: {
                [action.updateType]: updatedCommentId,
            }
        };
    },
    [UPDATE_COMMENTS_FAILURE](state, action) {
        return {
            ...state,
            error: action.error,
            commentsUpdating: false
        };
    },
});