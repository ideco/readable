import React, {Component} from 'react';
import {Button, Dropdown, Menu} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {loadCategories} from "../actions/categories";
import {connect} from "react-redux";
import {sortBy} from "../actions/posts";


class AppMenu extends Component {

    componentDidMount() {
        this.props.loadCategories()
    }

    render() {
        const {categories, selectedCategory, sort} = this.props;
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
                            <Dropdown.Item onClick={sort('timestamp')}>Date</Dropdown.Item>
                            <Dropdown.Item onClick={sort('voteScore')}>Score</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Menu.Item>
                        <Button primary as={Link} to="/posts/new">Create Post</Button>
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
        loadCategories: () => dispatch(loadCategories()),
        sort: (property) => () => dispatch(sortBy(property))
    }
};


AppMenu.propTypes = {};


export default connect(mapStateToProps, mapDispatchToProps)(AppMenu);
