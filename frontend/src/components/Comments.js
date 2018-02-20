import React, {Component} from 'react';
import {Button, Comment, Form, Header} from 'semantic-ui-react'
import PostComment from "./PostComment";

class Comments extends Component {
    render() {
        const {comments} = this.props;
        return (
            <Comment.Group threaded>
                <Header as='h3' dividing>Comments</Header>
                {comments.map((comment) => <PostComment key={comment.id} comment={comment}/>)}
                <Form reply>
                    <Form.TextArea/>
                    <Button content='Add Reply' labelPosition='left' icon='edit' primary/>
                </Form>
            </Comment.Group>
        )
    }
}

export default Comments