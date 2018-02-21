import React, {Component} from 'react';
import {Comment, Header, Icon} from 'semantic-ui-react'
import PostComment from "./PostComment";
import {loadComments, vote} from "../actions/comments";
import {connect} from "react-redux";

class Comments extends Component {

    componentDidMount() {
        this.props.loadComments(this.props.match.params.postId)
    }

    render() {
        const {comments, loading, vote} = this.props;
        return (
            <Comment.Group threaded>
                <Header as='h3' dividing>Comments</Header>
                {!loading ? (
                    comments.map((comment) =>
                        <PostComment key={comment.id} comment={comment}
                                     upVote={() => vote(comment.id, 'upVote')}
                                     downVote={() => vote(comment.id, 'downVote')}/>)
                ) : (
                    <Icon name='spinner' loading={true}/>
                )}
            </Comment.Group>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.comments.isLoading,
        comments: state.comments.comments,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadComments: (postId) => dispatch(loadComments(postId)),
        vote: (commentId, option) => dispatch(vote(commentId, option))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments)