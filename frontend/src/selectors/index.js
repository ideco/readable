import {createSelector} from 'reselect'
import _ from 'lodash'

const getPostsById = (state) => state.posts.byId;
const getSortProperty = (state) => state.posts.sort;
const getLastAddedId = (state) => state.posts.lastAddedId;
const getAddingPost = (state) => state.posts.addingPost;

const getCommentsById = (state) => state.comments.byId;

const getVotes = (state) => state.votes.byId;
const getVote = (state, id) => state.votes.byId[id];

const getAllCategories = (state) => state.categories;

export const getPosts = createSelector(
    [getPostsById, getVotes, getSortProperty],
    (postsById, votes, sortProperty) => {
        return _.orderBy(_.values(postsById).map((post) => ({
            ...post,
            voteScore: votes[post.id].voteScore
        })), sortProperty, 'desc');
    }
);

export const getComments = createSelector(
    [getCommentsById],
    (commentsById) => {
        return _.values(commentsById)
    }
);

export const makeGetVote = () => {
    return createSelector(
        [getVote],
        (vote) => {
            return vote;
        }
    );
};

export const getLastAddedPost = createSelector(
    [getLastAddedId, getPostsById],
    (lastAddedId, postsById) => (
        postsById[lastAddedId]
    )
);

export const isAddingPost = createSelector(
    [getAddingPost],
    (addingPost) => {
        return addingPost
    }
);

export const getCategories = createSelector(
    [getAllCategories],
    (categories) => (categories)
);
