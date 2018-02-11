import {LOAD_POSTS} from '../actions/posts'

export function posts(state = [], action) {
    switch (action.type) {
        case LOAD_POSTS:
            return action.posts;
        default:
            return state;
    }
}