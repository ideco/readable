import React, {Component} from 'react';
import {Card, Container, Dropdown, Grid, Header, Icon, List, Menu, Segment} from 'semantic-ui-react'

class App extends Component {
    render() {
        return (
            <div>
                <Menu fixed='top' inverted>
                    <Container>
                        <Menu.Item as='a' header>
                            Readable
                        </Menu.Item>
                        <Menu.Item as='a'>Home</Menu.Item>
                        <Dropdown item simple text='Categories'>
                            <Dropdown.Menu>
                                <Dropdown.Item>List Item</Dropdown.Item>
                                <Dropdown.Item>List Item</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown item simple text='Sort by'>
                            <Dropdown.Menu>
                                <Dropdown.Item>Date</Dropdown.Item>
                                <Dropdown.Item>Score</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Container>
                </Menu>

                <Container text style={{marginTop: '7em'}}>
                    <Header as='h1'>Posts From All Categories</Header>
                    <Card.Group>
                        <Card fluid>
                            <Card.Content>
                                <Card.Header><a>Udacity is the best place to learn React</a></Card.Header>
                                <Card.Meta>Submitted by <em>thingtwo</em> to <a>react</a> on the 22nd of August
                                    2017</Card.Meta>
                                <Card.Description>Everyone says so after all.</Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Grid columns='equal'>
                                    <Grid.Row>
                                        <Grid.Column>
                                            <a><Icon link color='green' name='chevron circle up'/></a>
                                            <a><Icon link color='red' name='chevron circle down'/></a>
                                            Score: 5
                                        </Grid.Column>
                                        <Grid.Column textAlign='center'>
                                            <a>55 comments</a>
                                        </Grid.Column>
                                        <Grid.Column textAlign='right'>
                                            <a><Icon link name='edit'/></a>
                                            <a><Icon link name='delete'/></a>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Card.Content>
                        </Card>
                    </Card.Group>
                </Container>

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
            </div>
        );
    }
}

export default App;
