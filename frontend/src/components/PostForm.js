import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Form} from 'formsy-semantic-ui-react'
import {Label} from 'semantic-ui-react';
import {getCategories} from "../selectors";
import {addPost} from "../actions/posts";

class PostForm extends Component {
    render() {
        const {categories, addPost} = this.props;
        return (
            <Form
                ref={ref => this.form = ref}
                onValidSubmit={data => addPost(data)}
            >
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

const mapStateToProps = (state) => ({
        categories: getCategories(state)
    }
);

const mapDispatchToProps = (dispatch) => ({
    addPost: (data) => dispatch(addPost(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
