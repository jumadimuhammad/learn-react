/** @format */

import React, { Component } from "react";

export default class Form extends Component {
    state = {
        name: "Muhammad jumadi",
        email: "jumadi@gmail.com",
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const dataUser = {
            name: this.state.name,
            email: this.state.email,
        };
        alert(JSON.stringify(dataUser));
    };

    handleChange = (event) => {
        const eventValue = event.target.value;
        const eventName = event.target.name;

        console.log(eventName);

        this.setState((prevState) => ({
            [eventName]: eventValue,
        }));
    };

    render() {
        return (
            <div className="container">
                <h1 className="text-center">Register Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-gorup">
                        <label htmlFor="email" class="form-contorl">
                            Name
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            defaultValue={this.state.name}
                            placeholder="Name"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-gorup">
                        <label htmlFor="email" class="form-contorl">
                            Email
                        </label>
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            defaultValue={this.state.email}
                            placeholder="Email"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-info my-3">
                        Masuk
                    </button>
                </form>
            </div>
        );
    }
}
