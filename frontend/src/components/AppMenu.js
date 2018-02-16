import React, {Component} from 'react';
import {Container, Dropdown, Menu} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {loadCategories} from "../actions/categories";
import {connect} from "react-redux";


class AppMenu extends Component {

    componentDidMount() {
        this.props.loadCategories()
    }

    render() {
        const {categories} = this.props;
        return (
            <Menu fixed='top' inverted>
                <Container>
                    <Menu.Item as={Link} to='/' header>
                        Readable
                    </Menu.Item>
                    <Menu.Item as='a'>Home</Menu.Item>
                    <Dropdown item simple text='Categories'>
                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to={'/'}>
                                All
                            </Dropdown.Item>
                            {categories.map(category =>
                                <Dropdown.Item key={category.path} as={Link} to={category.path}>
                                    {category.name}
                                </Dropdown.Item>
                            )}
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

const mapStateToProps = (state) => {
    return {
        categories: state.categories
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadCategories: () => dispatch(loadCategories())
    }
};


AppMenu.propTypes = {};


export default connect(mapStateToProps, mapDispatchToProps)(AppMenu);
