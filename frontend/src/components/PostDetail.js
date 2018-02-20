import React, {Component} from 'react';
import {Container, Icon} from "semantic-ui-react";
import {loadSinglePost} from "../actions/posts";
import {connect} from 'react-redux';
import PostPreview from "./PostPreview";
import Comments from "./Comments";

class PostDetail extends Component {

    componentDidMount() {
        this.props.loadSinglePost(this.props.match.params.postId)
    }

    render() {
        const {isLoading, post} = this.props;
        return (
            <Container text>
                {isLoading ? (
                    <Icon name='spinner' loading={true}/>
                ) : (
                    <PostPreview post={post}/>
                )}
                <Comments/>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.selectedPost.isLoading,
        post: state.selectedPost.post
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadSinglePost: (postId) => dispatch(loadSinglePost(postId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
