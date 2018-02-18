import {LOAD_POSTS} from '../actions/posts'

const defaultState = {
    allPosts: [],
    selectedPost: null
};

export function posts(state = defaultState, action) {
    switch (action.type) {
        case LOAD_POSTS:
            return {
                allPosts: action.posts,
                selectedPost: null
            };
        default:
            return state;
    }
}