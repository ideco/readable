import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCategories, getEditedPost, isAddingPost, makeGetPostById} from "../selectors";
import {editPost, loadPosts} from "../actions/posts";
import {Redirect} from "react-router";
import PostForm from "./PostForm";

class PostEdit extends Component {

    componentDidMount() {
        let params = this.props.match.params;
        this.props.loadPosts(params.category, params.postId)
    }

    componentWillReceiveProps(nextProps) {
        let category = nextProps.match.params.category;
        let postId = nextProps.match.params.postId;
        if (this.props.postId !== postId || this.props.category !== nextProps.category) {
            nextProps.loadPosts(category, postId)
        }
    }

    render() {
        const {loading, categories, isAdding, lastEdited, editPost, post} = this.props;
        const success = !isAdding && lastEdited;
        if (success) {
            return (
                <Redirect to={`/${lastEdited.category}/${lastEdited.id}`}/>
            )
        }
        return (
            <PostForm
                isLoading={loading || isAdding}
                categories={categories}
                submit={(data) => editPost(post.id, data)}
                post={post}
            />
        );
    }
}

const makeMapStateToProps = () => {
    const getPost = makeGetPostById();
    const mapStateToProps = (state, ownProps) => ({
            post: getPost(state, ownProps.match.params.postId),
            categories: getCategories(state),
            isAdding: isAddingPost(state),
            lastEdited: getEditedPost(state),
            loading: state.posts.postsLoading,
            postId: ownProps.match.params.postId,
            category: ownProps.match.params.category,
        }
    );
    return mapStateToProps;
};

const mapDispatchToProps = (dispatch) => ({
    editPost: (postId, data) => dispatch(editPost(postId, data)),
    loadPosts: (category, postId) => dispatch(loadPosts(category, postId)),
});

export default connect(makeMapStateToProps, mapDispatchToProps)(PostEdit);