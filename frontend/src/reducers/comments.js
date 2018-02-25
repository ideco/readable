import {LOAD_COMMENTS_FAILURE, LOAD_COMMENTS_REQUEST, LOAD_COMMENTS_SUCCESS} from "../actions/comments";
import {createReducer} from "./index";


const commentsInitialState = {
    commentsLoading: true,
    byId: {},
    error: null
};

export const comments = createReducer(commentsInitialState, {
    [LOAD_COMMENTS_REQUEST](state, action) {
        console.log(action);
        return {
            ...state,
            commentsLoading: true,
            error: null,
        };
    },
    [LOAD_COMMENTS_SUCCESS](state, action) {
        console.log(action);
        return {
            byId: action.response.entities.comments,
            commentsLoading: false,
            error: null,
        };
    },
    [LOAD_COMMENTS_FAILURE](state, action) {
        console.log(action);
        return {
            ...state,
            commentsLoading: false,
            error: action.error,
        };
    },
});