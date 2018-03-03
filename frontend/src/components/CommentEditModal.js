import React from 'react';
import {Header, Modal} from 'semantic-ui-react'
import CommentForm from "./CommentForm";

const CommentEditModal = (props) => {
    const {children, comment} = props;
    return (
        <Modal trigger={children} closeIcon>
            <Header icon='edit' content='Edit Comment'/>
            <Modal.Content>
                <CommentForm comment={comment}/>
            </Modal.Content>
        </Modal>
    );
};

export default CommentEditModal;
