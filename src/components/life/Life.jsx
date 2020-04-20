/** @format */
import React, { Component, Fragment } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter,
} from "react-router-dom";
import Github from "./Github";
import Nav from "./Nav";
import Mock from "./Mock";
import Country from "./Country";

class Life extends Component {
    render() {
        console.log(this.props);

        return (
            <Router>
                <h1>Selamat datang di Belajar react lifecycle</h1>
                <Nav />
                <Switch>
                    <Route exact path={`${this.props.match.url}/github`}>
                        <Github />
                    </Route>
                    <Route exact path="/life/mock">
                        <Mock />
                    </Route>
                    <Route exact path="/life/country">
                        <Country />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default withRouter(Life);
