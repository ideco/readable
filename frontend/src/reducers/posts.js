import {
    ADD_POST_REQUEST,
    ADD_POST_SUCCESS,
    LOAD_POSTS_FAILURE,
    LOAD_POSTS_REQUEST,
    LOAD_POSTS_SUCCESS,
    SORT_POSTS,
    VOTE_POSTS_SUCCESS
} from '../actions/posts'
import {createReducer} from "./index";

const postsInitialState = {
    postsLoading: true,
    addingPost: false,
    lastAddedId: null,
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
            byId: action.response.entities.posts,
            lastAddedId: null,
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
    },
    [VOTE_POSTS_SUCCESS](state, action) {
        // since the voting api returns the whole post, we might as
        // well update the state
        return {
            ...state,
            byId: {
                ...state.byId,
                [action.id]: action.response.entities.posts[action.id]
            },
            lastAddedId: null
        };
    },
    [ADD_POST_REQUEST](state, action) {
        return {
            ...state,
            addingPost: true,
            lastAddedId: null
        }
    },
    [ADD_POST_SUCCESS](state, action) {
        return {
            ...state,
            byId: action.response.entities.posts,
            lastAddedId: action.response.result[0],
            addingPost: false,
        }
    },
    [SORT_POSTS](state, action) {
        return {
            ...state,
            sort: action.property
        }
    }
});