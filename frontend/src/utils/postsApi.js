const BASE_URL = 'http://localhost:3001';


function baseFetch(relPath) {
    return fetch(`${BASE_URL}/${relPath}`,
        {
            headers: {'Authorization': 'whatever-you-want'}
        }
    ).then((res) => res.json())
}

export function fetchPosts(category, postId) {
    return doFetchPosts(category, postId)
        .then((posts) => (posts.map((post) => ({
            ...post,
            voteScore: {
                id: post.id,
                voteScore: post.voteScore
            }
        }))));
}

function doFetchPosts(category, postId) {
    if (category) {
        if (postId) {
            return fetchSinglePost(category, postId);
        }
        return baseFetch(`${category}/posts`);
    }
    return baseFetch('posts')
}

export function votePost(postId, option) {
    return fetch(`${BASE_URL}/posts/${postId}`, {
        method: 'POST',
        headers: {
            Authorization: 'whatever-you-want',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({option})
    }).then(data => data.json())
        .then((post) => ([{
            ...post,
            voteScore: {
                id: post.id,
                voteScore: post.voteScore
            }
        }]))
}

function fetchSinglePost(category, postId) {
    return baseFetch(`posts/${postId}`)
        .then((post) => {
            if (post.category !== category) {
                throw new Error('Post not found')
            }
            return [post]
        })
}