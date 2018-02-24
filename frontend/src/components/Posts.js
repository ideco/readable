import React, {Component} from 'react';
import {Card} from 'semantic-ui-react'
import {connect} from 'react-redux';
import {loadPosts, vote} from '../actions/posts';

import PostPreview from "./PostPreview";
import {getPosts} from "../selectors";

class Posts extends Component {

    componentDidMount() {
        let params = this.props.match.params;
        this.props.loadPosts(params.category, params.postId)
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.category !== nextProps.category) {
            nextProps.loadPosts(nextProps.match.params.category)
        }
    }

    render() {
        const {posts, votePost} = this.props;
        return (
            <div>
                <Card.Group>
                    {posts.map((post) =>
                        <PostPreview key={post.id}
                                     post={post}
                                     upVote={(postId) => votePost(postId, 'upVote')}
                                     downVote={(postId) => votePost(postId, 'downVote')}/>
                    )}
                </Card.Group>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        posts: getPosts(state),
        category: ownProps.match.params.category,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadPosts: (category, postId) => dispatch(loadPosts(category, postId)),
        votePost: (postId, option) => dispatch(vote(postId, option)),
    }
};

Posts.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
