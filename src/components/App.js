import React, { Component } from "react";
import "./App.css";

import Header from "./head/header";

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="App">
                <Header appName="CV-Application" />
            </div>
        );
    }
}
