import {schema} from 'normalizr'

export const voteScore = new schema.Entity('voteScores');
export const post = new schema.Entity('posts', {
        voteScore: voteScore
    }
);

export const comment = new schema.Entity('comments', {
    voteScore: voteScore
});

export const arrayOfPosts = new schema.Array(post);
export const arrayOfComments = new schema.Array(comment);