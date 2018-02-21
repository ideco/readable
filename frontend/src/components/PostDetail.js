import React, {Component} from 'react';
import {Icon} from "semantic-ui-react";
import {loadSinglePost, vote} from "../actions/posts";
import {connect} from 'react-redux';
import PostPreview from "./PostPreview";
import {loadComments} from "../actions/comments";

class PostDetail extends Component {

    componentDidMount() {
        this.props.loadSinglePost(this.props.match.params.postId);
        this.props.loadComments(this.props.match.params.postId)
    }

    render() {
        const {loading, post, votePost} = this.props;
        return (
            <div>
                {loading ? (
                    <Icon name='spinner' loading={true}/>
                ) : (
                    <PostPreview post={post}
                                 upVote={() => votePost(post.id, 'upVote')}
                                 downVote={() => votePost(post.id, 'downVote')}
                    />
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.posts.isLoading,
        post: state.posts.elements ? state.posts.elements[0] : null,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadSinglePost: (postId) => dispatch(loadSinglePost(postId)),
        loadComments: (postId) => dispatch(loadComments(postId)),
        votePost: (postId, option) => dispatch(vote(postId, option)),

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
