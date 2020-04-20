/** @format */

import React, { Fragment } from "react";
import "./index.scss";
import Navigasi from "./Navigasi";
import Regis from "./Regis";
import Jumbotron from "./Jumbotron";
import Form from "./components/hoks/Form";
import Life from "./components/life/Life";
import Formik from "./components/formik/Formik";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Github from "./components/life/Github";
import Mock from "./components/life/Mock";
import Country from "./components/life/Country";

function App() {
    return (
        <Fragment>
            <Router>
                <Navigasi
                    hoks="/hoks"
                    props="/hand"
                    life="/life"
                    formik="/formik"
                />
                <Switch>
                    <Route exact path="/">
                        <div className="container-fluid">
                            <Jumbotron />
                        </div>
                    </Route>
                    <Route path="/hoks">
                        <div className="container-fluid">
                            <Form />
                        </div>
                    </Route>
                    <Route path="/hand">
                        <div className="container-fluid">
                            <Regis />
                        </div>
                    </Route>
                    <Route exact path="/life">
                        <div className="container-fluid">
                            <div className="container mt-4">
                                <Life />
                            </div>
                        </div>
                    </Route>
                    <Route path="/formik">
                        <div className="container-fluid">
                            <div className="container mt-4">
                                <Formik />
                            </div>
                        </div>
                    </Route>
                </Switch>
            </Router>
        </Fragment>
    );
}

export default App;
