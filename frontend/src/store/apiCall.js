import {normalize} from 'normalizr'

export function apiCall({dispatch, getState}) {
    return next => action => {

        const {
            types,
            callAPI,
            payload = {},
            schema = null
        } = action;

        if (!types) {
            // Normal action: pass it on
            return next(action)
        }

        if (
            !Array.isArray(types) ||
            types.length !== 3 ||
            !types.every(type => typeof type === 'string')
        ) {
            throw new Error('Expected an array of three string types.')
        }

        if (typeof callAPI !== 'function') {
            throw new Error('Expected callAPI to be a function.')
        }

        const [requestType, successType, failureType] = types;

        dispatch(
            Object.assign({}, payload, {
                type: requestType
            })
        );

        return callAPI()
            .then(
                response =>
                    dispatch(
                        Object.assign({}, payload, {
                            response: schema ? normalize(response, schema) : response,
                            type: successType
                        })
                    ),
                error =>
                    dispatch(
                        Object.assign({}, payload, {
                            error,
                            type: failureType
                        })
                    )
            )
    }
}

function sleep(time) {

    var start = new Date();
    var now;

    while (true) {
        now = new Date();
        if (now - start >= time) {
            break;
        }
    }
}
