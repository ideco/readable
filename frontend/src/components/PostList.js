import React, {Component} from 'react';
import {Card} from 'semantic-ui-react'
import {connect} from 'react-redux';
import {loadPosts, loadSinglePost, vote} from '../actions/posts';

import PostPreview from "./PostPreview";

class PostList extends Component {

    componentDidMount() {
        let params = this.props.match.params;
        this.props.loadPosts(params.category, params.postId)
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.category !== nextProps.category) {
            nextProps.loadPosts(nextProps.match.params.category)
        }
    }

    render() {
        const {posts, votePost} = this.props;
        return (
            <div>
                <Card.Group>
                    {posts.map((post) =>
                        <PostPreview key={post.id} post={post} upVote={() => votePost(post.id, 'upVote')}
                                     downVote={() => votePost(post.id, 'downVote')}/>
                    )}
                </Card.Group>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.posts.elements,
        category: ownProps.match.params.category,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadPosts: (category, postId) => {
            if (postId) {
                dispatch(loadSinglePost(category, postId))
            } else {
                dispatch(loadPosts(category))
            }
        },
        votePost: (postId, option) => dispatch(vote(postId, option)),
    }
};

PostList.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
