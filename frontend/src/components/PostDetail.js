import React, {Component} from 'react';
import {Container, Icon} from "semantic-ui-react";
import {loadSinglePost} from "../actions/posts";
import {connect} from 'react-redux';
import PostPreview from "./PostPreview";

class PostDetail extends Component {

    componentDidMount() {
        this.props.loadSinglePost(this.props.match.params.postId)
    }

    render() {
        const {isLoading, post} = this.props;

        console.log(isLoading + " " + post);
        return (
            <Container text style={{marginTop: '7em'}}>
                {isLoading ? (
                    <Icon name='spinner' loading={true}/>
                ) : (
                    <PostPreview post={post}/>
                )}

            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state.posts.selectedPost);
    return {
        isLoading: state.posts.isLoading,
        post: state.posts.selectedPost
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadSinglePost: (postId) => dispatch(loadSinglePost(postId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
