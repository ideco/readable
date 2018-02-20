import {ALL_POSTS_LOADING, LOAD_POSTS, LOAD_SINGLE_POST, SELECTED_POST_LOADING} from '../actions/posts'

const postsDefaultState = {
    isLoading: true,
    allPosts: [],
};

export function posts(state = postsDefaultState, action) {
    switch (action.type) {
        case ALL_POSTS_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case LOAD_POSTS:
            return {
                allPosts: action.posts,
                isLoading: true
            };
        default:
            return state;
    }
}

const selectedPostDefaultState = {
    post: null,
    isLoading: true
};

export function selectedPost(state = selectedPostDefaultState, action) {
    switch (action.type) {
        case SELECTED_POST_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case LOAD_SINGLE_POST:
            return {
                post: action.post,
                isLoading: false
            };
        default:
            return state;
    }
}