import React, {Component} from 'react';
import {Card, Container, Header} from 'semantic-ui-react'
import {connect} from 'react-redux';
import {loadPosts} from '../actions/posts';

import PostPreview from "./PostPreview";

class PostList extends Component {

    componentDidMount() {
        this.props.loadPosts()
    }

    render() {
        const {posts} = this.props
        return (
            <Container text style={{marginTop: '7em'}}>
                <Header as='h1'>Posts From All Categories</Header>
                <Card.Group>
                    {posts.map((post) =>
                        <PostPreview key={post.id} post={post}/>
                    )}

                </Card.Group>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadPosts: () => dispatch(loadPosts())
    }
}

PostList.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
