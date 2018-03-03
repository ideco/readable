import {
    LOAD_POSTS_FAILURE,
    LOAD_POSTS_REQUEST,
    LOAD_POSTS_SUCCESS,
    SORT_POSTS,
    UPDATE_POST_FAILURE,
    UPDATE_POST_REQUEST,
    UPDATE_POST_SUCCESS,
    VOTE_POSTS_SUCCESS
} from '../actions/posts'
import {createReducer} from "./index";

const postsInitialState = {
    postsLoading: true,
    postUpdating: false,
    lastUpdate: {},
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
            lastUpdate: {},
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
            lastUpdate: {}
        };
    },
    [UPDATE_POST_REQUEST](state, action) {
        return {
            ...state,
            postUpdating: true,
            lastUpdate: {}
        }
    },
    [UPDATE_POST_SUCCESS](state, action) {
        let updatedPostId = action.postId;
        return {
            ...state,
            byId: {
                ...state.byId,
                [updatedPostId]: action.response.entities.posts[updatedPostId]
            },
            lastUpdate: {
                [action.updateType]: updatedPostId
            },
            postUpdating: false,
        }
    },
    [UPDATE_POST_FAILURE](state, action) {
        return {
            ...state,
            error: action.error,
            postUpdating: false,
        }
    },
    [SORT_POSTS](state, action) {
        return {
            ...state,
            sort: action.property
        }
    }
});