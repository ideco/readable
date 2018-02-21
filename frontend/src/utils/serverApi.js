const BASE_URL = 'http://localhost:3001/';

function baseFetch(relPath) {
    return fetch(BASE_URL + relPath,
        {
            headers: {'Authorization': 'whatever-you-want'}
        }
    ).then((res) => res.json())
}

export function fetchPosts(category) {
    if (!category) {
        return baseFetch('posts')
    }
    return baseFetch(`${category}/posts`)
}

export function fetchPostDetails(id) {
    return baseFetch(`posts/${id}`)
}

export function fetchCategories() {
    return baseFetch('categories')
}

export function fetchComments(postId) {
    return baseFetch(`posts/${postId}/comments`)
}

export function votePost(postId, option) {
    return fetch(`http://localhost:3001/posts/${postId}`, {
        method: 'POST',
        headers: {
            Authorization: 'whatever-you-want',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({option})
    }).then(data => data.json())
}

export function voteComment(commentId, option) {
    return fetch(`http://localhost:3001/comments/${commentId}`, {
        method: 'POST',
        headers: {
            Authorization: 'whatever-you-want',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({option})
    }).then(data => data.json())
}