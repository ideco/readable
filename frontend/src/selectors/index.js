import {createSelector} from 'reselect'
import {compareValues, objectToArray} from "../utils/arrayUtils";

const getAllPosts = state => state.posts.elements;
const getSortProperty = state => state.posts.sort;

export const getPosts = createSelector(
    [getAllPosts, getSortProperty],
    (posts, property) => {
        return objectToArray(posts).sort(compareValues(property));
    }
);