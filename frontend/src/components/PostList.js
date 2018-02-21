import React, {Component} from 'react';
import {Card, Header} from 'semantic-ui-react'
import {connect} from 'react-redux';
import {loadPosts, vote} from '../actions/posts';

import PostPreview from "./PostPreview";

class PostList extends Component {

    componentDidMount() {
        this.props.loadPosts(this.props.match.params.category)
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.category !== nextProps.category) {
            nextProps.loadPosts(nextProps.match.params.category)
        }
    }

    static createTitle(category) {
        if (!category) {
            return "Posts from All Categories"
        }
        return `Posts from Category "${category}"`
    }

    render() {
        const {posts, category, votePost} = this.props;
        return (
            <div>
                <Header as='h1'>{PostList.createTitle(category)}</Header>
                <Card.Group>
                    {posts.map((post) =>
                        <PostPreview key={post.id} post={post} upVote={() => votePost(post.id, 'upVote')}
                                     downVote={() => votePost(post.id, 'downVote')}/>
                    )}
                </Card.Group>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.posts.elements,
        category: ownProps.match.params.category,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadPosts: (category) => dispatch(loadPosts(category)),
        votePost: (postId, option) => dispatch(vote(postId, option)),
    }
};

PostList.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
