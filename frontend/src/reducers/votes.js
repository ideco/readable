import {LOAD_POSTS_SUCCESS, VOTE_POSTS_FAILURE, VOTE_POSTS_REQUEST, VOTE_POSTS_SUCCESS} from "../actions/posts";
import {createReducer} from "./index";

const votesInitialState = {
    byId: {}
};

export const votes = createReducer(votesInitialState, {
    [LOAD_POSTS_SUCCESS](state, action) {
        return {
            ...state,
            byId: action.response.entities.voteScores,
        };
    },
    [VOTE_POSTS_REQUEST](state, action) {
        return {
            ...state,
            byId: {
                ...state.byId,
                [action.id]: {
                    id: action.id,
                    loading: true
                }
            },
        };
    },
    [VOTE_POSTS_SUCCESS](state, action) {
        return {
            ...state,
            byId: {
                ...state.byId,
                [action.id]: action.response.entities.voteScores[action.id]
            },
        };
    },
    [VOTE_POSTS_FAILURE](state, action) {
        return {
            ...state,
            byId: {
                ...state.byId,
                [action.id]: {
                    error: action.error
                }
            },
        };
    },
});