import React, {Component} from 'react';

import {Route} from "react-router-dom"
import PostList from "./components/PostList";
import AppMenu from "./components/AppMenu";
import Footer from "./components/Footer";
import PostDetail from "./components/PostDetail";


class App extends Component {
    render() {
        return (
            <div>
                <AppMenu/>
                <Route exact path="/" component={PostList}/>
                <Route exact path="/:category" component={PostList}/>
                <Route exact path="/:category/:postId" component={PostDetail}/>
                <Footer/>
            </div>
        );
    }
}

export default App;
