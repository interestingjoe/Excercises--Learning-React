import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: []
        };
    }

    render() {
        return (
            <div>
                <input placeholder="Enter a Todo" />
                <button>Add</button>
                { this.state.todos.length === 0 ? "No Todos" : "You have Todos" }
            </div>
        );
    }
}

export default App;
