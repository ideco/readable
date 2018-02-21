import React, {Component} from 'react';
import {Button, Dropdown, Menu} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {loadCategories} from "../actions/categories";
import {connect} from "react-redux";


class AppMenu extends Component {

    componentDidMount() {
        this.props.loadCategories()
    }

    render() {
        const {categories, selectedCategory} = this.props;
        return (
            <Menu pointing secondary>
                <Menu.Item as={Link} to='/' header>
                    Readable
                </Menu.Item>
                <Menu.Item active={selectedCategory == null} as={Link} to={'/'}>
                    all
                </Menu.Item>
                {categories.map(category =>
                    <Menu.Item key={category.path} active={category.path === selectedCategory} as={Link}
                               to={`/${category.path}`}>
                        {category.name}
                    </Menu.Item>
                )}
                <Menu.Menu position='right'>
                    <Dropdown item simple text='Sort by'>
                        <Dropdown.Menu>
                            <Dropdown.Item>Date</Dropdown.Item>
                            <Dropdown.Item>Score</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Menu.Item>
                        <Button primary>Create Post</Button>
                    </Menu.Item>
                </Menu.Menu>

            </Menu>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        categories: state.categories,
        selectedCategory: ownProps.match.params.category
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadCategories: () => dispatch(loadCategories())
    }
};


AppMenu.propTypes = {};


export default connect(mapStateToProps, mapDispatchToProps)(AppMenu);
