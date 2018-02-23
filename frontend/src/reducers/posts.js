import {LOAD_POSTS_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, SORT, VOTE_POST} from '../actions/posts'
import {arrayToObject} from "../utils/arrayUtils";
import {createReducer} from "./index";

const postsInitialState = {
    postsLoading: true,
    elements: {},
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
            elements: arrayToObject(action.response, 'id'),
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
                elements: {
                    ...state.elements,
                    [action.post.id]: {
                        ...state.elements[action.post.id],
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
