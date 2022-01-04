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
import LocalStorageClient from "./localStorageClient";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.selfPrint = this._selfPrint.bind(this);
        this.LocalStorageClient = new LocalStorageClient("resume-save");

        const save = this.LocalStorageClient.retrieve();
        if (save) {
            this.state = save;
        } else {
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
        }

        this.saveToLS = this._saveToLS.bind(this);

        this.setParentStatePD = this._setParentStatePD.bind(this);
        this.setParentStateEdu = this._setParentStateEdu.bind(this);
        this.setParentStateExp = this._setParentStateExp.bind(this);
        this.setParentStateProj = this._setParentStateProj.bind(this);
        this.setParentStateSkills = this._setParentStateSkills.bind(this);
    }

    _selfPrint() {
        console.log("MAIN: ->", this.state);
    }
    _saveToLS() {
        this.LocalStorageClient.save(this.state);
    }
    _setParentStatePD(state) {
        this.setState({ personalData: state }, this.saveToLS);
    }
    _setParentStateEdu(state) {
        this.setState({ education: state }, this.saveToLS);
    }
    _setParentStateExp(state) {
        this.setState({ experience: state }, this.saveToLS);
    }
    _setParentStateProj(state) {
        this.setState({ project: state }, this.saveToLS);
    }
    _setParentStateSkills(state) {
        this.setState({ skills: state }, () => {
            this.saveToLS();
            console.log(this.LocalStorageClient.retrieve());
        });
    }
    render() {
        return (
            <div className="App-main">
                <Header appName="CS CV-Application" sf={this.selfPrint} />
                <div className="flex-container">
                    <div className="flex-col-left">
                        <PersonalData setParentState={this.setParentStatePD} personalData={this.state.personalData} />
                        <Education save={this.state.education} setParentState={this.setParentStateEdu} />
                        <Experience save={this.state.experience} setParentState={this.setParentStateExp} />
                        <Project save={this.state.project} setParentState={this.setParentStateProj} />
                        <MultiField defaultValue={this.state.skills} setParentState={this.setParentStateSkills} subject="Skill" />
                    </div>
                    <div className="flex-col-right">
                        <Resume info={this.state} reset={this.LocalStorageClient.reset} download={() => {}} />
                    </div>
                </div>
            </div>
        );
    }
}
