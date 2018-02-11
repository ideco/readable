import React from 'react';
import {Card, Grid, Icon} from 'semantic-ui-react'

const PostPreview = props => {
    return (
        <Card fluid>
            <Card.Content>
                <Card.Header><a>Udacity is the best place to learn React</a></Card.Header>
                <Card.Meta>Submitted by <em>thingtwo</em> to <a>react</a> on the 22nd of August
                    2017</Card.Meta>
                <Card.Description>Everyone says so after all.</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Grid columns='equal'>
                    <Grid.Row>
                        <Grid.Column>
                            <a><Icon link color='green' name='chevron circle up'/></a>
                            <a><Icon link color='red' name='chevron circle down'/></a>
                            Score: 5
                        </Grid.Column>
                        <Grid.Column textAlign='center'>
                            <a>55 comments</a>
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
