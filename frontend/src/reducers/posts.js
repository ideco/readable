import {LOAD_POSTS, LOAD_SINGLE_POST, LOADING} from '../actions/posts'

const defaultState = {
    isLoading: true,
    allPosts: [],
    selectedPost: null
};

export function posts(state = defaultState, action) {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                isLoading: true
            };
        case LOAD_POSTS:
            return {
                ...state,
                allPosts: action.posts,
                isLoading: true
            };
        case LOAD_SINGLE_POST:
            return {
                ...state,
                selectedPost: action.post,
                isLoading: false
            };
        default:
            return state;
    }
}