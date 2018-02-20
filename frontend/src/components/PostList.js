import React, {Component} from 'react';
import {Card, Container, Header} from 'semantic-ui-react'
import {connect} from 'react-redux';
import {loadPosts} from '../actions/posts';

import PostPreview from "./PostPreview";

class PostList extends Component {

    componentDidMount() {
        this.props.loadPosts(this.props.match.params.category)
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.category !== nextProps.category) {
            nextProps.loadPosts(nextProps.match.params.category)
        }
    }

    static createTitle(category) {
        if (!category) {
            return "Posts from All Categories"
        }
        return `Posts from Category "${category}"`
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

const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.posts.allPosts,
        category: ownProps.match.params.category,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadPosts: (category) => dispatch(loadPosts(category))
    }
};

PostList.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
