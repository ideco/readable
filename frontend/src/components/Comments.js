import React, {Component} from 'react';
import {Comment, Header, Icon} from 'semantic-ui-react'
import PostComment from "./PostComment";
import {loadComments} from "../actions/comments";
import {connect} from "react-redux";

class Comments extends Component {

    componentDidMount() {
        this.props.loadComments(this.props.postId)
    }

    render() {
        const {comments, loading} = this.props;
        return (
            <Comment.Group threaded>
                <Header as='h3' dividing>Comments</Header>
                {!loading ? (
                    comments.map((comment) => <PostComment key={comment.id} comment={comment}/>)
                ) : (
                    <Icon name='spinner' loading={true}/>
                )}
            </Comment.Group>
        )
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        loading: state.comments.isLoading,
        comments: state.comments.comments,
        postId: ownProps.post.id
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadComments: (postId) => dispatch(loadComments(postId)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments)