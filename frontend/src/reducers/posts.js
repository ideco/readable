import {ALL_POSTS_LOADING, LOAD_POSTS, LOAD_SINGLE_POST, SORT, VOTE_POST} from '../actions/posts'

const postsDefaultState = {
    isLoading: true,
    elements: [],
    sort: 'timestamp'
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
                ...state,
                elements: action.posts,
                isLoading: true
            };
        case LOAD_SINGLE_POST:
            return {
                ...state,
                elements: [action.post],
                isLoading: false
            };
        case VOTE_POST:
            return {
                ...state,
                elements: state.elements.map((post) => {
                    if (post.id === action.post.id) {
                        return action.post;
                    }
                    return post;
                }),
                isLoading: false
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
