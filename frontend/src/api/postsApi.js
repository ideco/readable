import {baseFetch} from "./index";
import {ensureIsArray, extractVoteScore} from "./resultMappers";


export const fetchPosts = (category, postId) => (
    baseFetch()(getFetchPath(category, postId))
        .then(ensureIsArray)
        .then(extractVoteScore)
        .then(ensurePostsMatchCategory(category))
);

export const votePost = (postId, option) => (
    baseFetch('POST', JSON.stringify({option}))('posts', postId)
        .then(ensureIsArray)
        .then(extractVoteScore)
);

const getFetchPath = (category, postId) => (
    postId ? ['posts', postId]
        : category ? [category, 'posts']
        : 'posts'
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

