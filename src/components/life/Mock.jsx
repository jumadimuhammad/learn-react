/** @format */

import React, { Component } from "react";

export default class Mock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            datas: [],
        };
    }

    componentDidMount = async () => {
        const url = "https://5e8f22bbfe7f2a00165eeedf.mockapi.io/book";
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
                <hr/>
                {Array.isArray(this.state.datas) &&
                    this.state.datas.map((element, index) => {
                        return (
                            <div className="row" key={index}>
                                <div className="col-2">
                                    <img
                                        className="img-thumbnail"
                                        src={element.picture}
                                        alt=""
                                    />
                                </div>
                                <div className="col">
                                    <h1>{element.title}</h1>
                                    <p>{element.createdAt}</p>
                                    <p>{element.publisher}</p>
                                </div>
                            </div>
                        );
                    })}
            </div>
        );
    }
}
