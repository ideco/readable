import React from 'react'
import {Button, Comment, Grid, Icon} from 'semantic-ui-react'

const PostComment = props => {
    const {comment} = props;
    return (
        <Comment>
            <Comment.Content>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Button.Group>
                                <Button icon basic><Icon link name='chevron circle up' color='green'/></Button>
                                <Button.Or text={comment.voteScore}/>
                                <Button icon basic><Icon link name='chevron circle down' color='red'/></Button>
                            </Button.Group>
                        </Grid.Column>
                        <Grid.Column width={13}>
                            <Comment.Author as='a'>{comment.author}</Comment.Author>
                            <Comment.Metadata>
                                <span>{new Date(comment.timestamp).toLocaleString()}</span>
                            </Comment.Metadata>
                            <Comment.Text>{comment.body}
                            </Comment.Text>
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
