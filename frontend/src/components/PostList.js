import React, {Component} from 'react';
import {Card, Loader} from 'semantic-ui-react'
import {connect} from 'react-redux';
import {loadPosts, vote} from '../actions/posts';

import PostPreview from "./PostPreview";
import {getPosts} from "../selectors";

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
        const {posts, votePost, loading} = this.props;
        if (loading) {
            return (
                <Loader active inline='centered'/>
            )
        }

        return (
                <Card.Group>
                    {posts.map((post) =>
                        <PostPreview key={post.id}
                                     post={post}
                                     upVote={(postId) => votePost(postId, 'upVote')}
                                     downVote={(postId) => votePost(postId, 'downVote')}/>
                    )}
                </Card.Group>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        posts: getPosts(state),
        loading: state.posts.postsLoading,
        postId: ownProps.match.params.postId,
        category: ownProps.match.params.category,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadPosts: (category, postId) => dispatch(loadPosts(category, postId)),
        votePost: (postId, option) => dispatch(vote(postId, option)),
    }
};

PostList.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
