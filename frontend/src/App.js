import React, {Component} from 'react';

import {Route} from "react-router-dom"
import PostList from "./components/PostList";
import AppMenu from "./components/AppMenu";
import Footer from "./components/Footer";
import PostDetail from "./components/PostDetail";
import Comments from "./components/Comments";
import {Container} from "semantic-ui-react";


class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={AppMenu}/>
                <Route path="/:category" component={AppMenu}/>
                <Container text>
                    <Route exact path="/" component={PostList}/>
                    <Route exact path="/:category" component={PostList}/>
                    <Route exact path="/:category/:postId" component={PostDetail}/>
                    <Route exact path="/:category/:postId" component={Comments}/>
                </Container>
                <Footer/>
            </div>
        );
    }
}

export default App;
