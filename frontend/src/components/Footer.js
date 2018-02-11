import React from 'react';
import {Container, List, Segment} from 'semantic-ui-react'

const Footer = () => {
    return (
        <Segment
            inverted
            vertical
            style={{margin: '5em 0em 0em', padding: '2em 0em'}}
        >
            <Container textAlign='center'>
                <List horizontal inverted divided link>
                    <List.Item as='a' href='#'>Contact Us</List.Item>
                </List>
            </Container>
        </Segment>
    );
};

export default Footer;
