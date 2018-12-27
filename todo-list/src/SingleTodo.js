import React, { Component } from "react";

class SingleTodo extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <li>{this.props.todo}<button>x</button></li>
        );
    }
}

export default SingleTodo;