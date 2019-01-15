import React from "react";
import PropTypes from "prop-types";

export class Events extends React.Component {
    constructor(props) {
        super();
        this.age = props.age;
    }

    onMakeOlder() {
        this.age += 3;
        console.log("--onMakeOlder: ", this.age);
    }

    render() {
        return (
            <div>
                <hr />
                <h2>Events</h2>
                <p>Your age is {this.age}</p>
                <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">
                    Make me older.
                </button>
            </div>
        );
/*
                This OnClick also works. It uses the ES6 format.
                onClick={() => this.onMakeOlder()}
*/
    }
}

Events.propTypes = {
    age: PropTypes.number
}