import _ from 'lodash';

export const BASE_URL = 'http://localhost:3001';

const createUrl = (...path) => _.join(_.flattenDeep(_.without(path, null, undefined)), '/');

const headers = {
    'Authorization': 'whatever-you-want',
    'Content-Type': 'application/json'
};

export const baseFetch = (method = 'GET', body = undefined) => (
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