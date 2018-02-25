import React from 'react'
import {Comment, Grid, Icon} from 'semantic-ui-react'
import Vote from "./Vote";

const PostComment = props => {
    const {comment, upVote, downVote} = props;
    return (
        <Comment>
            <Comment.Content>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Vote id={comment.id} upVote={upVote} downVote={downVote}/>
                        </Grid.Column>
                        <Grid.Column width={13}>
                            <Comment.Author as='a'>{comment.author}</Comment.Author>
                            <Comment.Metadata>
                                <span>{new Date(comment.timestamp).toLocaleString()}</span>
                            </Comment.Metadata>
                            <Comment.Text> {comment.body} </Comment.Text>
                            <Comment.Actions>
                                <Comment.Action>
                                    <Icon link name='edit'/>
                                </Comment.Action>
                                <Comment.Action>
                                    <Icon name='delete'/>
                                </Comment.Action>
                            </Comment.Actions>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Comment.Content>
        </Comment>
    );
};

export default PostComment;
