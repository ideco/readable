import React, {Component} from 'react';

import {Route} from "react-router-dom"
import PostList from "./components/PostList";
import AppMenu from "./components/AppMenu";
import Footer from "./components/Footer";
import Comments from "./components/Comments";
import {Container} from "semantic-ui-react";


class App extends Component {
    render() {
        return (
            <div>
                <Route path="/:category?" component={AppMenu}/>
                <Container text>
                    <Route exact path="/:category?/:postId?" component={PostList}/>
                    <Route exact path="/:category/:postId" component={Comments}/>
                </Container>
                <Footer/>
            </div>
        );
    }
}

export default App;
