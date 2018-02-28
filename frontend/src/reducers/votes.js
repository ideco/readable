import {
    LOAD_POSTS_SUCCESS,
    UPDATE_POST_SUCCESS,
    VOTE_POSTS_FAILURE,
    VOTE_POSTS_REQUEST,
    VOTE_POSTS_SUCCESS
} from "../actions/posts";
import {
    LOAD_COMMENTS_SUCCESS,
    VOTE_COMMENT_FAILURE,
    VOTE_COMMENT_REQUEST,
    VOTE_COMMENT_SUCCESS
} from "../actions/comments";
import _ from 'lodash';
import {createReducer} from "./index";

const votesInitialState = {
    byId: {}
};

const updateVotes = (state, action) => ({
    ...state,
    byId: replaceAllVotesOfType(
        action.voteType,
        state.byId,
        action.response.entities.voteScores
    )
});


const setVoteIsLoading = (state, action) => ({
    ...state,
    byId: {
        ...state.byId,
        [action.id]: {
            id: action.id,
            loading: true
        }
    },
});


const updateSingleVote = (state, action) => ({
    ...state,
    byId: {
        ...state.byId,
        [action.id]: action.response.entities.voteScores[action.id]
    },
});

const handleFailure = (state, action) => ({
    ...state,
    byId: {
        ...state.byId,
        [action.id]: {
            error: action.error
        }
    },
});

export const votes = createReducer(votesInitialState, {
    [LOAD_POSTS_SUCCESS](state, action) {
        return updateVotes(state, action)
    },
    [UPDATE_POST_SUCCESS](state, action) {
        return updateVotes(state, action)
    },
    [LOAD_COMMENTS_SUCCESS](state, action) {
        return updateVotes(state, action)
    },
    [VOTE_POSTS_REQUEST](state, action) {
        return setVoteIsLoading(state, action);
    },
    [VOTE_COMMENT_REQUEST](state, action) {
        return setVoteIsLoading(state, action);
    },
    [VOTE_POSTS_SUCCESS](state, action) {
        return updateSingleVote(state, action);
    },
    [VOTE_COMMENT_SUCCESS](state, action) {
        return updateSingleVote(state, action);
    },
    [VOTE_POSTS_FAILURE](state, action) {
        return handleFailure(state, action);
    },
    [VOTE_COMMENT_FAILURE](state, action) {
        return handleFailure(state, action);
    },
});


const replaceAllVotesOfType = (type, sourceScores, voteScores) => (
    _.assign(_.omitBy(sourceScores, score => score.type === type), voteScores)
);