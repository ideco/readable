import React, {Component} from 'react';
import {Comment, Header, Segment} from 'semantic-ui-react'
import PostComment from "./PostComment";
import {loadComments, vote} from "../actions/comments";
import {connect} from "react-redux";
import {getComments} from "../selectors";

class Comments extends Component {

    componentDidMount() {
        this.props.loadComments(this.props.postId)
    }

    render() {
        const {comments, loading, vote} = this.props;

        if (loading) {
            return (
                <div></div>
            )
        }

        return (
            <Comment.Group threaded>
                <Header as='h3' dividing>Comments</Header>
                {comments.length > 0 ? (
                    comments.map((comment) =>
                        <PostComment key={comment.id} comment={comment}
                                     upVote={() => vote(comment.id, 'upVote')}
                                     downVote={() => vote(comment.id, 'downVote')}/>)
                ) : (
                    <Segment>
                        No comments yet. Feel free to start the discussion.
                    </Segment>
                )}
            </Comment.Group>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        loading: state.comments.commentsLoading,
        comments: getComments(state),
        postId: ownProps.postId
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadComments: (postId) => dispatch(loadComments(postId)),
        vote: (commentId, option) => dispatch(vote(commentId, option))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments)