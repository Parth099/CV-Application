import React, { Component } from "react";
import "./App.css";
import Header from "./head/header";
import PersonalData from "./personal-info/personalData";
import EducationItem from "./education/educationItem";
import Education from "./education/education";

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
            education: [],
        };
        this.setParentStatePD = this._setParentStatePD.bind(this);
        this.setParentStateEdu = this._setParentStateEdu.bind(this);
    }

    _selfPrint() {
        console.log("MAIN: ->", this.state);
    }
    _setParentStatePD(state) {
        this.setState({ personalData: state });
    }
    _setParentStateEdu(state) {
        this.setState({ education: state });
    }
    render() {
        return (
            <div className="App">
                <Header appName="CV-Application" />
                <div className="flex-col-left">
                    <PersonalData setParentState={this.setParentStatePD} personalData={this.state.personalData} />
                    <Education setParentState={this.setParentStateEdu} />
                </div>
            </div>
        );
    }
}
