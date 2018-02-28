import React, {Component} from 'react';
import {Form} from 'formsy-semantic-ui-react'
import {Label} from 'semantic-ui-react';

class CommentForm extends Component {
    render() {
        const {isLoading, submit, comment, clear} = this.props;
        let isEdit = Boolean(comment);
        if (clear) {

        }
        return (
            <Form
                loading={isLoading}
                ref='form'
                reply={true}
                onValidSubmit={data => {
                    submit(data);
                    this.refs.form.reset();
                }}
            >
                <Form.Input
                    required={!isEdit}
                    name='author'
                    disabled={isEdit}
                    value={isEdit ? comment.author : undefined}
                    label='Username'
                    placeholder='Username'
                    validations='isAlphanumeric'
                    errorLabel={<Label color="red" pointing/>}
                    validationErrors={{
                        isDefaultRequiredValue: 'Username is mandatory',
                        isAlphanumeric: 'Username must not contain spaces or special characters',
                    }}
                />

                <Form.TextArea
                    required
                    name='body'
                    label='Content'
                    value={isEdit ? comment.body : undefined}
                    placeholder='Content'
                    errorLabel={<Label color="red" pointing/>}
                    validationErrors={{
                        isDefaultRequiredValue: 'Content is mandatory',
                    }}
                />

                <Form.Button name='form-button-control-public' content='Submit' icon='edit' primary/>
            </Form>
        );
    }
}

export default CommentForm;
