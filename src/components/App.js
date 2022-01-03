import React, { Component } from "react";
import "./App.css";

//compoments
import Header from "./head/header";
import PersonalData from "./personal-info/personalData";
import Education from "./education/education";
import Experience from "./exp/experience";
import Project from "./projects/project";
import MultiField from "./multiField/multiField";
import Resume from "./resumeOUT/resume";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.selfPrint = this._selfPrint.bind(this);
        this.state = {
            //fixed prototype
            personalData: {
                "First Name": "",
                "Last Name": "",
                Title: "",
                Email: "",
                phoneNum: "",
                zip: "",
                cityState: "",
            },
            education: [],
            experience: [],
            project: [],
            skills: [],
        };
        this.setParentStatePD = this._setParentStatePD.bind(this);
        this.setParentStateEdu = this._setParentStateEdu.bind(this);
        this.setParentStateExp = this._setParentStateExp.bind(this);
        this.setParentStateProj = this._setParentStateProj.bind(this);
        this.setParentStateSkills = this._setParentStateSkills.bind(this);
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
    _setParentStateExp(state) {
        this.setState({ experience: state });
    }
    _setParentStateProj(state) {
        this.setState({ project: state });
    }
    _setParentStateSkills(state) {
        this.setState({ skills: state });
    }
    render() {
        return (
            <div className="App-main">
                <Header appName="CV-Application" sf={this.selfPrint} />
                <div className="flex-container">
                    <div className="flex-col-left">
                        <PersonalData setParentState={this.setParentStatePD} personalData={this.state.personalData} />
                        <Education setParentState={this.setParentStateEdu} />
                        <Experience setParentState={this.setParentStateExp} />
                        <Project setParentState={this.setParentStateProj} />
                        <MultiField setParentState={this.setParentStateSkills} subject="Skill" />
                    </div>
                    <div className="flex-col-right">
                        <Resume info={this.state} />
                    </div>
                </div>
            </div>
        );
    }
}
