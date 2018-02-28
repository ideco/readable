import React, {Component} from 'react';
import {Card, Loader} from 'semantic-ui-react'
import {connect} from 'react-redux';
import {loadPosts} from '../actions/posts';

import Post from "./Post";
import {arePostsLoading, getPosts} from "../selectors";

class PostList extends Component {

    componentDidMount() {
        let params = this.props.match.params;
        this.props.loadPosts(params.category)
    }

    componentWillReceiveProps(nextProps) {
        let category = nextProps.match.params.category;
        if (this.props.category !== nextProps.category) {
            nextProps.loadPosts(category)
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
