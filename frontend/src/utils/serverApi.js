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