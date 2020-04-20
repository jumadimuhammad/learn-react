/** @format */

import React, { Component } from "react";

export default class Jumbotron extends Component {
    render() {
        return (
            <div className="container mt-4">
                <div className="jumbotron bg-info text-light">
                    <h1 className="display-4">Hello, everyone!</h1>
                    <p className="lead">
                        Welcome in my dashboard learn-reactJs
                    </p>
                    <hr className="my-4" />
                    <p>
                        It uses utility classNameNamees for typography and spacing to
                        space content out within the larger container.
                    </p>
                    <p className="lead">
                        <a
                            className="btn btn-primary btn-lg"
                            href="# /"
                            role="button"
                        >
                            Learn more
                        </a>
                    </p>
                </div>
            </div>
        );
    }
}
