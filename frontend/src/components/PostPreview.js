import React from 'react';
import {Card, Grid, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const PostPreview = props => {
    const {post, upVote, downVote} = props;
    return (
        <Card fluid>
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
                            <a onClick={upVote}><Icon link color='green' name='chevron circle up'/></a>
                            <a onClick={downVote}><Icon link color='red' name='chevron circle down'/></a>
                            Score: {post.voteScore}
                        </Grid.Column>
                        <Grid.Column textAlign='center'>
                            <Link to={`/${post.category}/${post.id}`}> {post.commentCount} comments</Link>
                        </Grid.Column>
                        <Grid.Column textAlign='right'>
                            <a><Icon link name='edit'/></a>
                            <a><Icon link name='delete'/></a>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Card.Content>
        </Card>
    );
};

export default PostPreview;
