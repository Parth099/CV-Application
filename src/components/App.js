import React, { Component } from "react";
import "./App.css";

import Header from "./head/header";
import Field from "./field/field";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.f = this._f.bind(this);
    }

    _f(val) {
        console.log(val);
    }

    render() {
        return (
            <div className="App">
                <Header appName="CV-Application" />
                <Field changeHandler={this.f} id="" label="label" />
            </div>
        );
    }
}
