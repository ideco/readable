import React, {Component} from 'react';
import {Comment, Header, Icon} from 'semantic-ui-react'
import PostComment from "./PostComment";

class Comments extends Component {
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

export default Comments