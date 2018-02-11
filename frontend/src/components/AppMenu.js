import React, {Component} from 'react';
import {Container, Dropdown, Menu} from 'semantic-ui-react'


class AppMenu extends Component {
    render() {
        return (
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
        );
    }
}

AppMenu.propTypes = {};

export default AppMenu;
