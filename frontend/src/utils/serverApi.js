const BASE_URL = 'http://localhost:3001/';

function baseFetch(relPath) {
    return fetch(BASE_URL + relPath,
        {
            headers: {'Authorization': 'whatever-you-want'}
        }
    ).then((res) => res.json())
}

export function fetchPosts() {
    return baseFetch('posts')
}

export function fetchCategories() {
    return baseFetch('categories')
}