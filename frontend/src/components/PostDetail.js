import React, {Component} from 'react';
import {connect} from 'react-redux';
import {arePostsLoading, makeGetPostById} from "../selectors";
import {loadSinglePost} from "../actions/posts";
import {Loader} from "semantic-ui-react";
import Post from "./Post";
import Comments from "./Comments";

class PostDetail extends Component {

    componentDidMount() {
        let params = this.props.match.params;
        this.props.loadPost(params.category, params.postId)
    }

    componentWillReceiveProps(nextProps) {
        let category = nextProps.match.params.category;
        let postId = nextProps.match.params.postId;
        if (this.props.postId !== postId || this.props.category !== nextProps.category) {
            nextProps.loadPost(category, postId)
        }
    }

    render() {
        console.log(this.props);
        const {post, loading} = this.props;
        if (loading) {
            return (
                <Loader active inline='centered'/>
            )
        }

        return (
            <div>
                <Post key={post.id} post={post}/>
                <Comments postId={post.id}/>
            </div>
        );
    }
}

const makeMapStateToProps = () => {
    const getPost = makeGetPostById();
    const mapStateToProps = (state, ownProps) => ({
            loading: arePostsLoading(state),
            postId: ownProps.match.params.postId,
            category: ownProps.match.params.category,
            post: getPost(state, ownProps.match.params.postId),
        }
    );
    return mapStateToProps;
};

const mapDispatchToProps = (dispatch) => ({
    loadPost: (category, postId) => dispatch(loadSinglePost(category, postId)),
});


export default connect(makeMapStateToProps, mapDispatchToProps)(PostDetail);
