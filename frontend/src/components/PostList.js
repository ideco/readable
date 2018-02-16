import React, {Component} from 'react';
import {Card, Container, Header} from 'semantic-ui-react'
import {connect} from 'react-redux';
import {loadPosts} from '../actions/posts';

import PostPreview from "./PostPreview";

class PostList extends Component {

    componentDidMount() {
        this.props.loadPosts(this.props.category)
    }

    static createTitle(pathName) {
        if (!pathName) {
            return "Posts from All Categories"
        }
        return `Posts from Category "${pathName}"`
    }

    render() {
        const {posts, category} = this.props;
        return (
            <Container text style={{marginTop: '7em'}}>
                <Header as='h1'>{PostList.createTitle(category)}</Header>
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
        category: state.routing.location.pathname.substring(1)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadPosts: (category) => dispatch(loadPosts(category))
    }
};

PostList.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
