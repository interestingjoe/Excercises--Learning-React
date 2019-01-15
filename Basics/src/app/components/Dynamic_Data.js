import React from "react";

export class Dynamic_Data extends React.Component {
    render() {
        let str = "";
        str = true ? <p>Hello world!</p> : "";

        return (
            <div>
                <hr />
                <h2>Outputting Dynamic Data</h2>
                {str}
                { 10 === 3 ? "Yes" : "No" }
                { <p>This is Just a test</p> }
            </div>
        );
    }
}
