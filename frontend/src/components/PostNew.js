import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAddedPost, getCategories, isAddingPost} from "../selectors";
import {addPost} from "../actions/posts";
import {Redirect} from "react-router";
import PostForm from "./PostForm";

class PostNew extends Component {
    render() {
        const {categories, isAdding, lastAdded, addPost} = this.props;
        const success = !isAdding && lastAdded;
        if (success) {
            return (
                <Redirect to={`/${lastAdded.category}/${lastAdded.id}`}/>
            )
        }
        return (
            <div>
                <PostForm
                    isLoading={isAdding}
                    categories={categories}
                    submit={addPost}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
        categories: getCategories(state),
        isAdding: isAddingPost(state),
        lastAdded: getAddedPost(state)
    }
);

const mapDispatchToProps = (dispatch) => ({
    addPost: (data) => dispatch(addPost(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostNew);
