/** @format */

import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
    render() {
        return (
            <div>
                <div>
                    <ul>
                        <li>
                            <Link to="/life/github">Github</Link>
                        </li>
                        <li>
                            <Link to="/life/mock">MockApi</Link>
                        </li>
                        <li>
                            <Link to="/life/country">Countries Api</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
