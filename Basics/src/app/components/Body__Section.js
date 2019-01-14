import React from "react";

export class Body__Section extends React.Component {
    render() {
        let str = "";
        str = true ? <p>Hello world!</p> : "";

        return (
            <div>
                <h2>Outputing Dynamic Data</h2>
                    {str}
                    { 10 === 3 ? "Yes" : "No" }
                    { <p>This is Just a test</p> }
            </div>
        );
    }
}
