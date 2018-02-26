import _ from 'lodash';

export const BASE_URL = 'https://reddit-clone-server-rfpeezcxpm.now.sh';

const createUrl = (...path) => _.join(_.flattenDeep(path), '/');

const headers = {
    'Authorization': 'whatever-you-want',
    'Content-Type': 'application/json'
};

export const baseFetch = (method = 'GET', body = {}) => (
    (...path) => {
        return fetch(createUrl(BASE_URL, ...path),
            {
                method,
                headers,
                body
            }
        ).then((res) => res.json());
    }
);