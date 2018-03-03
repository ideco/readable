import React, {Component} from 'react';

import {Route, Switch} from "react-router-dom"
import PostList from "./components/PostList";
import AppMenu from "./components/AppMenu";
import Footer from "./components/Footer";
import {Container} from "semantic-ui-react";
import PostNew from "./components/PostNew";
import PostEdit from "./components/PostEdit";
import PostDetail from "./components/PostDetail";
import NotFound from "./components/NotFound";


class App extends Component {
    render() {
        return (
            <div>
                <Route path="/:category?" component={AppMenu}/>
                <Container text>
                    <Switch>
                        <Route exact path="/posts/new" component={PostNew}/>
                        <Route exact path="/:category?" component={PostList}/>
                        <Route exact path="/:category/:postId" component={PostDetail}/>
                        <Route exact path="/:category/:postId/edit" component={PostEdit}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Container>
                <Footer/>
            </div>
        );
    }
}

export default App
