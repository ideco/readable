import React, {Component} from 'react';
import {Form} from 'formsy-semantic-ui-react'
import {Label} from 'semantic-ui-react';

class PostForm extends Component {
    render() {
        const {categories, isLoading, submit, post} = this.props;
        let isEdit = Boolean(post);
        return (
            <Form
                loading={isLoading}
                ref={ref => this.form = ref}
                onValidSubmit={data => submit(data)}
            >
                <Form.Input
                    required
                    name='title'
                    label='Title'
                    value={isEdit ? post.title : undefined}
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
                    value={isEdit ? post.body : undefined}
                    placeholder='Content'
                    errorLabel={<Label color="red" pointing/>}
                    validationErrors={{
                        isDefaultRequiredValue: 'Content is mandatory',
                    }}
                />
                <Form.Group widths='equal'>
                    <Form.Input
                        required={!isEdit}
                        name='author'
                        disabled={isEdit}
                        value={isEdit ? post.author : undefined}
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
                        required={!isEdit}
                        name='category'
                        label='Category'
                        value={isEdit ? post.category : undefined}
                        disabled={isEdit}
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
