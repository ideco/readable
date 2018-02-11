import React, {Component} from 'react';
import {Card, Container, Header} from 'semantic-ui-react'

import PostPreview from "./PostPreview";

class PostList extends Component {
    render() {
        return (
            <Container text style={{marginTop: '7em'}}>
                <Header as='h1'>Posts From All Categories</Header>
                <Card.Group>
                    <PostPreview/>
                    <PostPreview/>
                    <PostPreview/>
                </Card.Group>
            </Container>
        );
    }
}

PostList.propTypes = {};

export default PostList;
