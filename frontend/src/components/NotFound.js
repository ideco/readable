import React from 'react';
import {history} from "../store/store";
import {Icon, Message} from "semantic-ui-react";

const NotFound = (props) => {
    const {message} = props;
    return (
        <Message icon warning>
            <Icon name='warning sign'/>
            <Message.Content>
                <Message.Header>{message ? message : 'Not found.'}</Message.Header>
                <a onClick={history.goBack}>Go back</a>.
            </Message.Content>
        </Message>
    );
};

export default NotFound;
