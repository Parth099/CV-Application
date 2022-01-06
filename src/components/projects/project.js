import React, { Component } from "react";
import ProjectItem from "./projectItem";
import uniqid from "uniqid";

export default class Project extends Component {
    constructor(props) {
        super(props);

        this.getDefaultObj = this._getDefaultObj.bind(this);

        const { save } = this.props;
        if (save && save.length > 0) {
            this.state = { project: save };
        } else {
            this.state = {
                project: [this.getDefaultObj()],
            };
        }
        this.delProject = this._delProject.bind(this);
        this.editProject = this._editProject.bind(this);
        this.addProject = this._addProject.bind(this);
        this.sendUpdate = this._sendUpdate.bind(this); //sync op
    }

    _sendUpdate() {
        this.props.setParentState({ project : this.state });
    }

    _getDefaultObj() {
        return {
            name: "",
            techUsed: "",
            timeFrame: "",
            link: "",
            details: [],
            uuid: uniqid(),
        };
    }

    _delProject(uuid) {
        const index = this.state.project.findIndex((proj) => proj.uuid === uuid);
        if (index < 0) return;
        const newState = [...this.state.project];
        newState.splice(index, 1);
        this.setState({ project: newState }, this.sendUpdate);
    }

    _editProject(uuid, newObj) {
        const index = this.state.project.findIndex((proj) => proj.uuid === uuid);
        if (index < 0) return;
        const newState = [...this.state.project];
        newState[index] = newObj;
        this.setState({ project: newState }, this.sendUpdate);
    }

    _addProject() {
        const newState = [...this.state.project, this.getDefaultObj()];
        this.setState({ project: newState }, this.sendUpdate);
    }

    render() {
        return (
            <div className="projects-container">
                <h1 className="group-title">Projects</h1>
                {[...this.state.project].map((proj) => (
                    <div className="project-element" key={proj.uuid}>
                        <ProjectItem uuid={proj.uuid} delFunc={this.delProject} editFunc={this.editProject} stateObj={proj}/>
                    </div>
                ))}
                <button className="add btn" onClick={this.addProject}>
                    Add Another Project
                </button>
            </div>
        );
    }
}
