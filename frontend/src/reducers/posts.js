import {ALL_POSTS_LOADING, LOAD_POSTS, LOAD_SINGLE_POST, SORT, VOTE_POST} from '../actions/posts'
import {arrayToObject} from "../utils/arrayUtils";

const postsDefaultState = {
    isLoading: true,
    elements: {},
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
                elements: arrayToObject(action.posts, 'id'),
                isLoading: true
            };
        case LOAD_SINGLE_POST:
            return {
                ...state,
                elements: arrayToObject([action.post], 'id'),
                isLoading: false
            };
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
