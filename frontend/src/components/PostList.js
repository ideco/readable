import React, {Component} from 'react';
import {Card, Loader, Segment} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {loadPosts} from '../actions/posts';
import _ from 'lodash'

import Post from "./Post";
import {arePostsLoading, getCategories, getPosts} from "../selectors";
import NotFound from "./NotFound";

class PostList extends Component {

    componentDidMount() {
        let params = this.props.match.params;
        this.props.loadPosts(params.category)
    }

    componentWillReceiveProps(nextProps) {
        let category = nextProps.match.params.category;
        if (this.props.category !== nextProps.category) {
            nextProps.loadPosts(category)
        }
    }

    render() {
        const {posts, loading, categories, category} = this.props;
        if (loading) {
            return (
                <Loader active inline='centered'/>
            )
        }
        if (category && !(_.includes(categories.map(c => c.path), category))) {
            return (
                <NotFound
                    message={`Could not find category: ${category}`}
                />
            )
        }



        return (
            <div>
                {posts.length > 0 ? (
                    <Card.Group>
                        {posts.map((post) =>
                            <Post key={post.id}
                                  post={post}/>
                        )}
                    </Card.Group>
                ) : (
                    <Segment>
                        No posts yet. Feel free to <Link to='/posts/new'>create a new post</Link>.
                    </Segment>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        posts: getPosts(state),
        categories: getCategories(state),
        loading: arePostsLoading(state),
        category: ownProps.match.params.category,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadPosts: (category) => dispatch(loadPosts(category))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
