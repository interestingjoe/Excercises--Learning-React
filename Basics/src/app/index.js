import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Dynamic_Data } from "./components/Dynamic_Data";
import { Passing_Props_Data } from "./components/Passing_Props_Data";
import { Events } from "./components/Events";

class App extends React.Component {
    render() {
        var user = {
            name: "Anna",
            hobbies: ["Tennis", "Hockey", "Reading"]
        };
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Dynamic_Data/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Passing_Props_Data name={"John"} age={27} user={user}>
                            <p>Passing this paragraph to the component.</p>
                            <div>This is another string passed to the component.</div>
                            <span>{2 + 3}</span>
                            {true ? "Test 123" : "Test 456"}
                        </Passing_Props_Data>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Events age={37}/>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));