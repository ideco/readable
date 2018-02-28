import {baseFetch} from './index'
import {ensureIsArray, extractVoteScore} from "./resultMappers";

export const fetchComments = (postId) => (
    baseFetch()('posts', postId, 'comments')
        .then(extractVoteScore('comment'))
);


export const voteComment = (commentId, option) => (
    baseFetch('POST', JSON.stringify({option}))('comments', commentId)
        .then(ensureIsArray)
        .then(extractVoteScore('comment'))
);

export const addComment = (postId, data) => (
    baseFetch('POST', JSON.stringify(data))('comments')
        .then(ensureIsArray)
        .then(extractVoteScore('comment'))
);