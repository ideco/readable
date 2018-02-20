import React from 'react';
import {Card, Grid, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const PostPreview = props => {
    const {post} = props;
    return (
        <Card fluid>
            <Card.Content>
                <Card.Header as={Link} to={`/${post.category}/${post.id}`}>{post.title}</Card.Header>
                <Card.Meta>Submitted
                    by <em>{post.author}</em> to <Link
                        to={post.category}>{post.category}</Link> on {new Date(post.timestamp).toLocaleString()}
                </Card.Meta>
                <Card.Description>{post.body}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Grid columns='equal'>
                    <Grid.Row>
                        <Grid.Column>
                            <a><Icon link color='green' name='chevron circle up'/></a>
                            <a><Icon link color='red' name='chevron circle down'/></a>
                            Score: {post.voteScore}
                        </Grid.Column>
                        <Grid.Column textAlign='center'>
                            <a>{post.commentCount} comments</a>
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
