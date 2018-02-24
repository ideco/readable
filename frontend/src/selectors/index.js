import {createSelector} from 'reselect'
import {compareValues} from "../utils/arrayUtils";
import {denormalize} from 'normalizr'
import {arrayOfPosts} from "../store/schema";

const getAllPosts = state => state.posts.byId;
const getSortProperty = state => state.posts.sort;

export const getPosts = createSelector(
    [getAllPosts, getSortProperty],
    (posts, property) => {
        let denormalizedPosts = denormalize(posts.result, arrayOfPosts, posts.entities);
        return denormalizedPosts ? denormalizedPosts.sort(compareValues(property)) : []
    }
);