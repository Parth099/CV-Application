import React, { Component } from "react";
import "./App.css";

import Header from "./head/header";
import PersonalData from "./personal-info/personalData";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.selfPrint = this._selfPrint.bind(this);
        this.state = {
            personalData: {
                "First Name": "",
                "Last Name": "",
                Title: "",
                Email: "",
                Address: "",
            },
        };
        this.setParentStatePD = this._setParentStatePD.bind(this);
    }

    _selfPrint() {
        console.log("MAIN: ->", this.state);
    }
    _setParentStatePD(state) {
        this.setState({ personalData: state });
    }
    render() {
        return (
            <div className="App">
                <Header appName="CV-Application" />
                <div className="flex-col-left">
                    <PersonalData personalData={this.state.personalData} setParentState={this.setParentStatePD} />
                </div>
            </div>
        );
    }
}
