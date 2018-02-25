export const ensureIsArray = object => Array.isArray(object) ? object : [object];

export const extractVoteScore = (type) =>
    (objects) => (
        objects.map(object => ({
                ...object,
                voteScore: {
                    id: object.id,
                    type,
                    voteScore: object.voteScore
                }
            }
        ))
    );