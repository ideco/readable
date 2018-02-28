import React, {Component} from 'react';
import {Form} from 'formsy-semantic-ui-react'
import {Label, Message} from 'semantic-ui-react';

class PostForm extends Component {
    render() {
        const {categories, isLoading, submit} = this.props;
        return (
            <Form
                loading={isLoading}
                ref={ref => this.form = ref}
                onValidSubmit={data => submit(data)}
            >
                <Message
                    success
                    header='Post added'
                    content="You will be redirected shortly."
                />
                <Form.Input
                    required
                    name='title'
                    label='Title'
                    placeholder='Title'
                    errorLabel={<Label color="red" pointing/>}
                    validationErrors={{
                        isDefaultRequiredValue: 'Title is mandatory',
                    }}
                />
                <Form.TextArea
                    required
                    name='body'
                    label='Content'
                    placeholder='Content'
                    errorLabel={<Label color="red" pointing/>}
                    validationErrors={{
                        isDefaultRequiredValue: 'Content is mandatory',
                    }}
                />
                <Form.Group widths='equal'>
                    <Form.Input
                        required
                        name='author'
                        label='Username'
                        placeholder='Username'
                        validations='isAlphanumeric'
                        errorLabel={<Label color="red" pointing/>}
                        validationErrors={{
                            isDefaultRequiredValue: 'Username is mandatory',
                            isAlphanumeric: 'Username must not contain spaces or special characters',
                        }}
                    />
                    <Form.Select
                        required
                        name='category'
                        label='Category'
                        options={categories.map((category) => ({
                            key: category.path,
                            text: category.name,
                            value: category.name
                        }))}
                        placeholder='Category'/>
                </Form.Group>
                <Form.Button name='form-button-control-public' content='Submit'/>
            </Form>
        );
    }
}

export default PostForm;
