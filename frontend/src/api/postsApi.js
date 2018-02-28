import {baseFetch} from "./index";
import {ensureIsArray, extractVoteScore} from "./resultMappers";

export const fetchPosts = (category) => (
    baseFetch()(category, 'posts')
        .then(ensureIsArray)
        .then(extractVoteScore('post'))
        .then(ensurePostsMatchCategory(category))
);

export const fetchSinglePost = (category, postId) => (
    baseFetch()('posts', postId)
        .then(ensureIsArray)
        .then(extractVoteScore('post'))
        .then(ensurePostsMatchCategory(category))
);

export const votePost = (postId, option) => (
    baseFetch('POST', JSON.stringify({option}))('posts', postId)
        .then(ensureIsArray)
        .then(extractVoteScore('post'))
);

export const putPost = (postId, title, body) => (
    baseFetch('PUT', JSON.stringify({
            title,
            body
        })
    )('posts', postId)
        .then(ensureIsArray)
        .then(extractVoteScore('post'))
);

export const createPost = (postId, data) => (
    baseFetch('POST', JSON.stringify({
        id: postId,
        timestamp: Date.now(),
        ...data
    }))('posts')
        .then(ensureIsArray)
        .then(extractVoteScore('post'))
);

export const deletePost = (postId) => (
    baseFetch("DELETE")('posts', postId)
        .then(ensureIsArray)
        .then(extractVoteScore('post'))
);

const ensurePostsMatchCategory = (category) => (
    (posts) => category ? checkEveryPostMatchesCategory(posts, category) : posts
);

const checkEveryPostMatchesCategory = (posts, category) => {
    posts.forEach((post) => {
        if (post.category !== category) {
            throw new Error('Post not found')
        }
    });
    return posts;
};

