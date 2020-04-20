/** @format */

import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navigasi extends Component {
    render() {
        return (
            <div className="container-fluid bg-primary">
                <div className="container">
                <nav className="navbar navbar-expand">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">
                                <button className="btn btn-warning">
                                    Home
                                </button>
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link to={this.props.hoks} className="nav-link">
                                <button className="btn btn-warning">
                                    Hoks state
                                </button>
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link to={this.props.props} className="nav-link">
                                <button className="btn btn-warning">
                                    Handling
                                </button>
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link to={this.props.life} className="nav-link">
                                <button className="btn btn-warning">
                                    Lifecycle Method
                                </button>
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link to={this.props.formik} className="nav-link">
                                <button className="btn btn-warning">
                                    Formik
                                </button>
                            </Link>
                        </li>
                    </ul>
                </nav>
                </div>
            </div>
        );
    }
}
