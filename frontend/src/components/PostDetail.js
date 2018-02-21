import React, {Component} from 'react';
import {Container, Icon} from "semantic-ui-react";
import {loadSinglePost, vote} from "../actions/posts";
import {connect} from 'react-redux';
import PostPreview from "./PostPreview";
import Comments from "./Comments";
import {loadComments} from "../actions/comments";

class PostDetail extends Component {

    componentDidMount() {
        this.props.loadSinglePost(this.props.match.params.postId);
        this.props.loadComments(this.props.match.params.postId)
    }

    render() {
        const {isPostLoading, post, areCommentsLoading, comments, votePost} = this.props;
        return (
            <Container text>
                {isPostLoading ? (
                    <Icon name='spinner' loading={true}/>
                ) : (
                    <PostPreview post={post} upVote={() => votePost(post.id, 'upVote')}
                                 downVote={() => votePost(post.id, 'downVote')}/>
                )}
                <Comments comments={comments} loading={areCommentsLoading}/>

            </Container>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        isPostLoading: state.posts.isLoading,
        post: state.posts.elements ? state.posts.elements[0] : null,
        areCommentsLoading: state.comments.isLoading,
        comments: state.comments.comments
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
