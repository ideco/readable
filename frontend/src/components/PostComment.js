import React from 'react'
import {Comment, Grid, Icon} from 'semantic-ui-react'

const PostComment = props => {
    const {comment} = props;
    return (
        <Comment>
            <Comment.Content>
                <Comment.Author as='a'>{comment.author}</Comment.Author>
                <Comment.Metadata>
                    <span>{new Date(comment.timestamp).toLocaleString()}</span>
                </Comment.Metadata>
                <Comment.Text>{comment.body}</Comment.Text>
                <Comment.Actions>
                    <Grid columns='equal'>
                        <Grid.Row>
                            <Grid.Column>
                                <Comment.Action>
                                    <Icon link color='green' name='chevron circle up'/>
                                </Comment.Action>
                                <Comment.Action>
                                    <Icon link color='red' name='chevron circle down'/>
                                </Comment.Action>
                                Score: {comment.voteScore}
                            </Grid.Column>
                            <Grid.Column textAlign='right'>
                                <Comment.Action>
                                    <Icon link name='edit'/>
                                </Comment.Action>
                                <Comment.Action>
                                    <Icon name='delete'/>
                                </Comment.Action>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                </Comment.Actions>
            </Comment.Content>
        </Comment>
    );
};

export default PostComment;
