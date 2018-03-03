import React, {Component} from 'react';
import {Header, Icon, Modal} from 'semantic-ui-react'
import CommentForm from "./CommentForm";

class CommentEditModal extends Component {

    state = {modalOpen: false};
    handleOpen = () => this.setState({modalOpen: true});
    handleClose = () => this.setState({modalOpen: false});

    render() {
        const {comment, edit} = this.props;
        return (
            <Modal
                trigger={<Icon name='edit' onClick={this.handleOpen}/>}
                open={this.state.modalOpen}
                onClose={this.handleClose}
                closeIcon>
                <Header icon='edit' content='Edit Comment'/>
                <Modal.Content>
                    <CommentForm
                        comment={comment}
                        submit={(data => {
                            edit(data.body);
                            this.handleClose();
                        })}/>
                </Modal.Content>
            </Modal>
        );
    }
}

export default CommentEditModal;
