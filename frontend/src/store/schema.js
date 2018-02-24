import {schema} from 'normalizr'

export const voteScore = new schema.Entity('voteScores');
export const post = new schema.Entity('posts', {
        voteScore: voteScore
    }
);

export const arrayOfPosts = new schema.Array(post);
