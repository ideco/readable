import React, {Component} from 'react';

import PostList from "./components/PostList";
import AppMenu from "./components/AppMenu";
import Footer from "./components/Footer";
import {Route} from "react-router-dom"


class App extends Component {
    render() {
        return (
            <div>
                <AppMenu/>
                <Route exact path="/" component={PostList}/>
                <Route path="/:category" component={PostList}/>
                <Footer/>
            </div>
        );
    }
}

export default App;
