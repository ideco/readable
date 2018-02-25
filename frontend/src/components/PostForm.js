import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Form, Input, TextArea} from 'semantic-ui-react'

class PostForm extends Component {
    render() {
        return (
            <Form>
                <Form.Group widths='equal'>
                    <Form.Field id='form-input-control-first-name' control={Input} label='First name'
                                placeholder='First name'/>
                    <Form.Field id='form-input-control-last-name' control={Input} label='Last name'
                                placeholder='Last name'/>
                </Form.Group>
                <Form.Field id='form-textarea-control-opinion' control={TextArea} label='Opinion'
                            placeholder='Opinion'/>
                <Form.Field id='form-button-control-public' control={Button} content='Confirm'
                            label='Label with htmlFor'/>
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
