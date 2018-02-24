import {createSelector} from 'reselect'
import _ from 'lodash'

const getPostsById = state => state.posts.byId;
const getVotesById = state => state.posts.votesById;
const getSortProperty = state => state.posts.sort;

export const getPosts = createSelector(
    [getPostsById, getVotesById, getSortProperty],
    (postsById, votesById, sortProperty) => {
        return _.sortBy(_.values(postsById), sortProperty);
    }
);