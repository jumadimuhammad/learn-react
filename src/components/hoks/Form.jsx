/** @format */

import React, { Component } from "react";
import Moment from "moment";

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: "",
            createdAt: Moment().format("MMMM Do YYYY, h:mm:ss a"),
        };
    }

    handleChange = (event) => {
        const input = event.target.value;
        this.setState((prevState) => ({
            ...prevState,
            todo: input,
        }));
    };

    handleSubmit = (event) => {
        event.preventDefault();
        
        const todos = localStorage.getItem("todos");

        const getLocalStorage = todos === null ? [] : JSON.parse(todos);

        getLocalStorage.push(this.state);

        localStorage.setItem("todos", JSON.stringify(getLocalStorage));
        window.location.reload();
    };

    editTodo = (index) => {
        const todos = JSON.parse(localStorage.getItem("todos"));
        let edit = prompt("Write your todo");

        const data = {
            todo: edit,
            createdAt: Moment().format("MMMM Do YYYY, h:mm:ss a"),
        };

        todos.splice(index, 1, data);

        localStorage.setItem("todos", JSON.stringify(todos));
        window.location.reload();
    };

    deleteTodo = (index) => {
        const todos = JSON.parse(localStorage.getItem("todos"));
        todos.splice(index, 1);

        localStorage.setItem("todos", JSON.stringify(todos));
        window.location.reload();
    };

    render() {
        const todos = JSON.parse(localStorage.getItem("todos"));
        return (
            <div className="container mt-3">
                <h1 className="text-center">Learn react-hoks</h1>
                <div className="row">
                    <div className="col">
                        <form
                            className="form-group"
                            onSubmit={this.handleSubmit}
                        >
                            <input
                                className="form-control my-3"
                                type="text"
                                name="todo"
                                placeholder="Todos"
                                required
                                onChange={this.handleChange}
                            />
                            <button type="submit" className="btn btn-info">
                                Add
                            </button>
                        </form>
                    </div>
                    <div className="col">
                        <ul>
                            {Array.isArray(todos) &&
                                todos.map((element, index) => {
                                    return (
                                        <li className="p-1" key={index}>
                                            {element.todo}
                                            <a
                                                href="# /"
                                                className="mx-3"
                                                onClick={() => {
                                                    this.editTodo(index);
                                                }}
                                            >
                                                Edit
                                            </a>
                                            <a
                                                href="# /"
                                                className=""
                                                onClick={() => {
                                                    this.deleteTodo(index);
                                                }}
                                            >
                                                Delete
                                            </a>
                                        </li>
                                    );
                                })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
