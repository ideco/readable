import {LOAD_POSTS_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, SORT, VOTE_POST} from '../actions/posts'
import {createReducer} from "./index";

const postsInitialState = {
    postsLoading: true,
    byId: {},
    sort: 'timestamp',
    error: null
};


export const posts = createReducer(postsInitialState, {
    [LOAD_POSTS_REQUEST](state, action) {
        return {
            ...state,
            postsLoading: true,
            error: null
        };
    },
    [LOAD_POSTS_SUCCESS](state, action) {
        return {
            ...state,
            byId: action.response,
            postsLoading: false,
            error: null
        };
    },
    [LOAD_POSTS_FAILURE](state, action) {
        return {
            ...state,
            postsLoading: false,
            error: action.error
        };
    }
});

export function posts2(state = postsInitialState, action) {
    switch (action.type) {
        case VOTE_POST:
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [action.post.id]: {
                        ...state.byId[action.post.id],
                        voteScore: action.post.voteScore
                    }
                },
                postsLoading: false
            };
        case SORT:
            return {
                ...state,
                sort: action.sort
            };

        default:
            return state;
    }
}
