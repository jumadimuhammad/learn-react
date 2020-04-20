/** @format */

import React, { Component } from "react";

export default class Github extends Component {
    constructor(props) {
        super(props);

        this.state = {
            datas: [],
        };
    }

    componentDidMount = async () => {
        const url = "https://api.github.com/users";
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);

        this.setState((prevState) => ({
            ...prevState,
            datas: result,
        }));
    };

    render() {
        return (
            <div>
                <hr />
                {Array.isArray(this.state.datas) &&
                    this.state.datas.map((element, index) => {
                        return (
                            <div className="row" key={index}>
                                <div className="col-2">
                                    <img
                                        className="img-thumbnail"
                                        src={element.avatar_url}
                                        alt=""
                                    />
                                </div>
                                <div className="col">
                                    <h1>{element.login}</h1>
                                    <p>{element.id}</p>
                                    <p>{element.subscriptions_url}</p>
                                    <p>{element.type}</p>
                                </div>
                            </div>
                        );
                    })}
            </div>
        );
    }
}
