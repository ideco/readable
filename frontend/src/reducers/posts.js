import {ALL_POSTS_LOADING, LOAD_POSTS, LOAD_SINGLE_POST, SELECTED_POST_LOADING, VOTE_POST} from '../actions/posts'

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
        case LOAD_SINGLE_POST:
            return {
                allPosts: [action.post],
                isLoading: false
            };
        case VOTE_POST:
            return {
                allPosts: state.allPosts.map((post) => {
                    if (post.id === action.post.id) {
                        return action.post;
                    }
                    return post;
                }),
                isLoading: false
            };
        default:
            return state;
    }
}
