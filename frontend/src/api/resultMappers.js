export const ensureIsArray = object => Array.isArray(object) ? object : [object];

export const extractVoteScore = objects => (
    objects.map(object => ({
            ...object,
            voteScore: {
                id: object.id,
                voteScore: object.voteScore
            }
        }
    ))
);