import React, {Component} from 'react';

import {Route, Switch} from "react-router-dom"
import PostList from "./components/Posts";
import AppMenu from "./components/AppMenu";
import Footer from "./components/Footer";
import Comments from "./components/Comments";
import {Container} from "semantic-ui-react";
import PostForm from "./components/PostForm";
import PostNew from "./components/PostNew";


class App extends Component {
    render() {
        return (
            <div>
                <Route path="/:category?" component={AppMenu}/>
                <Container text>
                    <Switch>
                        <Route exact path="/posts/new" component={PostNew}/>
                        <Route exact path="/:category?/:postId?" children={({match}) => (
                            <div>
                                {match && <PostList match={match}/>}
                                {match && match.params.postId && <Comments match={match}/>}
                            </div>
                        )}/>
                        <Route exact path="/:category/:postId/edit" component={PostForm}/>
                    </Switch>
                </Container>
                <Footer/>
            </div>
        );
    }
}

export default App
