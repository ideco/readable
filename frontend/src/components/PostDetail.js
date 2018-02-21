import React, {Component} from 'react';
import {Container, Icon} from "semantic-ui-react";
import {loadSinglePost} from "../actions/posts";
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
        const {isPostLoading, post, areCommentsLoading, comments} = this.props;
        return (
            <Container text>
                {isPostLoading ? (
                    <Icon name='spinner' loading={true}/>
                ) : (
                    <PostPreview post={post}/>
                )}
                <Comments comments={comments} loading={areCommentsLoading}/>

            </Container>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        isPostLoading: state.selectedPost.isLoading,
        post: state.selectedPost.post,
        areCommentsLoading: state.comments.isLoading,
        comments: state.comments.comments
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadSinglePost: (postId) => dispatch(loadSinglePost(postId)),
        loadComments: (postId) => dispatch(loadComments(postId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
