import React from 'react';
import {Button, Card, Grid, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import Vote from "./Vote";

const PostPreview = props => {
    const {post, upVote, downVote} = props;
    return (
        <Card fluid raised>
            <Card.Content>
                <Card.Header as={Link} to={`/${post.category}/${post.id}`}>{post.title}</Card.Header>
                <Card.Meta>Submitted by <em>{post.author}</em> to
                    <Link to={`/${post.category}`}> {post.category} </Link>
                    on {new Date(post.timestamp).toLocaleString()}
                </Card.Meta>
                <Card.Description>{post.body}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Grid columns='equal'>
                    <Grid.Row>
                        <Grid.Column>
                            <Vote id={post.id} upVote={upVote} downVote={downVote}/>
                        </Grid.Column>
                        <Grid.Column textAlign='center'>
                            <Link to={`/${post.category}/${post.id}`}> {post.commentCount} comments</Link>
                        </Grid.Column>
                        <Grid.Column textAlign='right'>
                            <Button icon><Icon link name='edit'/></Button>
                            <Button icon><Icon link name='delete'/></Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Card.Content>
        </Card>
    );
};

export default PostPreview;
