import {createSelector} from 'reselect'
import _ from 'lodash'

const getPostsById = state => state.posts.byId;
const getSortProperty = state => state.posts.sort;

const getVote = (state, id) => state.votes.byId[id];

export const getPosts = createSelector(
    [getPostsById, getSortProperty],
    (postsById, sortProperty) => {
        return _.sortBy(_.values(postsById), sortProperty);
    }
);

export const makeGetVote = () => {
    return createSelector(
        [getVote],
        (votes) => {
            return votes;
        }
    );
};
