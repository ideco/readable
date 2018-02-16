import React, {Component} from 'react';
import {Card, Container, Header} from 'semantic-ui-react'
import {connect} from 'react-redux';
import {loadPosts} from '../actions/posts';

import PostPreview from "./PostPreview";

class PostList extends Component {

    componentDidMount() {
        this.props.loadPosts()
    }

    static createTitle(pathName) {
        if (pathName === '/') {
            return "Posts from All Categories"
        }
        return `Posts from category "${pathName.substring(1)}"`
    }

    render() {
        const {posts, location} = this.props;
        return (
            <Container text style={{marginTop: '7em'}}>
                <Header as='h1'>{PostList.createTitle(location.pathname)}</Header>
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
        posts: state.posts,
        location: state.routing.location
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadPosts: () => dispatch(loadPosts())
    }
};

PostList.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
