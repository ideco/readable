import React from 'react';
import {Card, Grid, Icon} from 'semantic-ui-react'

const PostPreview = props => {
    const {post} = props
    return (
        <Card fluid>
            <Card.Content>
                <Card.Header><a>{post.title}</a></Card.Header>
                <Card.Meta>Submitted by <em>{post.author}</em> to <a>{post.category}</a> on {post.timestamp}
                    2017</Card.Meta>
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
