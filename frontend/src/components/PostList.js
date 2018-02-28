import React, {Component} from 'react';
import {Card, Loader} from 'semantic-ui-react'
import {connect} from 'react-redux';
import {loadPosts} from '../actions/posts';

import Post from "./Post";
import {arePostsLoading, getPosts} from "../selectors";

class PostList extends Component {

    componentDidMount() {
        let params = this.props.match.params;
        this.props.loadPosts(params.category, params.postId)
    }

    componentWillReceiveProps(nextProps) {
        let category = nextProps.match.params.category;
        let postId = nextProps.match.params.postId;
        if (this.props.postId !== postId || this.props.category !== nextProps.category) {
            nextProps.loadPosts(category, postId)
        }
    }

    render() {
        const {posts, loading} = this.props;
        if (loading) {
            return (
                <Loader active inline='centered'/>
            )
        }

        return (
            <Card.Group>
                {posts.map((post) =>
                    <Post key={post.id}
                          post={post}/>
                )}
            </Card.Group>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        posts: getPosts(state),
        loading: arePostsLoading(state),
        postId: ownProps.match.params.postId,
        category: ownProps.match.params.category,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadPosts: (category, postId) => dispatch(loadPosts(category, postId))
    }
};

PostList.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
