import React from "react";
import PropTypes from "prop-types";

export class Passing_Props_Data extends React.Component {
    render() {
        console.log("--Checking Passing_Props_Data: ", this.props);
        return (
            <div>
                <hr />
                <h2>Passing Data with Props</h2>
                <p>Your name is {this.props.name}.</p>
                <p>Your age is {this.props.age}.</p>
                <p>Object is: {this.props.user.name}</p>
                <div>
                    <h3>Hobbies</h3>
                    <ul>
                        {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                    </ul>
                </div>
                {this.props.children}
            </div>
        );
    }
}

Passing_Props_Data.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.object,
    children: PropTypes.element.isRequired
};
