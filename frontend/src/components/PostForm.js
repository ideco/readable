import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Form} from 'formsy-semantic-ui-react'
import {Label} from 'semantic-ui-react';
import {getCategories} from "../selectors";

class PostForm extends Component {
    onValidSubmit = (formData) => alert(JSON.stringify(formData));   // eslint-disable-line

    render() {
        const {categories} = this.props;
        return (
            <Form
                ref={ref => this.form = ref}
                onValidSubmit={this.onValidSubmit}
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
                    name='content'
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
                        name='username'
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

function mapStateToProps(state) {
    return {
        categories: getCategories(state)
    };
}

export default connect(
    mapStateToProps,
)(PostForm);
