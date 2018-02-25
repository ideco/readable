import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Form, Input, Select, TextArea} from 'semantic-ui-react'

const categories = [
    {key: 'react', text: 'React', value: 'react'},
    {key: 'redux', text: 'Redux', value: 'redux'},
];

class PostForm extends Component {
    render() {
        return (
            <Form>
                <Form.Field id='form-input-control-title' control={Input} label='Title'
                            placeholder='Title'/>
                <Form.Field id='form-textarea-control-opinion' control={TextArea} label='Opinion'
                            placeholder='Content'/>
                <Form.Group widths='equal'>
                    <Form.Field id='form-input-control-username' control={Input} label='Username'
                                placeholder='Username'/>
                    <Form.Field id='form-input-control-category' control={Select} label='Category' options={categories}
                                placeholder='Category'/>
                </Form.Group>
                <Form.Field id='form-button-control-public' control={Button} content='Submit'/>
            </Form>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(PostForm);
