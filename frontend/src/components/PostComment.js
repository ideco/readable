import React from 'react'
import {Comment, Grid, Icon} from 'semantic-ui-react'
import Vote from "./Vote";
import CommentEditModal from "./CommentEditModal";

const PostComment = props => {
    const {comment, upVote, downVote, edit, deleteComment} = props;
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
                                    <CommentEditModal
                                        comment={comment}
                                        edit={edit}>
                                        <Icon name='edit'/>
                                    </CommentEditModal>
                                </Comment.Action>
                                <Comment.Action>
                                    <Icon name='delete' onClick={deleteComment}/>
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
