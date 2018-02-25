import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Form, Input, Select, TextArea} from 'semantic-ui-react'
import {getCategories} from "../selectors";

class PostForm extends Component {
    render() {
        const {categories} = this.props;
        return (
            <Form>
                <Form.Field id='form-input-control-title' control={Input} label='Title'
                            placeholder='Title'/>
                <Form.Field id='form-textarea-control-opinion' control={TextArea} label='Opinion'
                            placeholder='Content'/>
                <Form.Group widths='equal'>
                    <Form.Field id='form-input-control-username' control={Input} label='Username'
                                placeholder='Username'/>
                    <Form.Field id='form-input-control-category' control={Select} label='Category'
                                options={categories.map((category) => ({
                                    key: category.path,
                                    text: category.name,
                                    value: category.name
                                }))}
                                placeholder='Category'/>
                </Form.Group>
                <Form.Field id='form-button-control-public' control={Button} content='Submit'/>
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
