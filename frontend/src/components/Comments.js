import React, {Component} from 'react';
import {Comment, Header, Segment} from 'semantic-ui-react'
import PostComment from "./PostComment";
import {addComment, editComment, loadComments, vote} from "../actions/comments";
import {connect} from "react-redux";
import {areCommentsUpdating, getComments} from "../selectors";
import CommentForm from "./CommentForm";

class Comments extends Component {

    componentDidMount() {
        this.props.loadComments(this.props.postId)
    }

    render() {
        const {comments, loading, vote, postId, addComment, editComment, updating} = this.props;

        if (loading) {
            return (
                <div></div>
            )
        }

        return (
            <div>
                <Comment.Group threaded>
                    <Header as='h3' dividing>Comments</Header>
                    {comments.length > 0 ? (
                        comments.map((comment) =>
                            <PostComment key={comment.id} comment={comment}
                                         edit={(body) => editComment(comment.id, body)}
                                         upVote={() => vote(comment.id, 'upVote')}
                                         downVote={() => vote(comment.id, 'downVote')}/>)
                    ) : (
                        <Segment>
                            No comments yet. Feel free to start the discussion.
                        </Segment>
                    )}
                </Comment.Group>
                <Header as='h4' dividing>Reply</Header>
                <CommentForm
                    submit={(data) => addComment(postId, data)}
                    isLoading={updating}
                />
            </div>

        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        loading: state.comments.commentsLoading,
        updating: areCommentsUpdating(state),
        comments: getComments(state),
        postId: ownProps.postId
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadComments: (postId) => dispatch(loadComments(postId)),
        addComment: (postId, data) => dispatch(addComment(postId, data)),
        editComment: (commentId, body) => dispatch(editComment(commentId, body)),
        vote: (commentId, option) => dispatch(vote(commentId, option))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments)