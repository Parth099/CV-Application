import React, { Component } from "react";
import Field from "../field/field";
import MultiField from "../multiField/multiField";

export default class ProjectItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            techUsed: "",
            timeFrame: "",
            link: "",
            details: [],
            uuid: props.uuid,
        };

        this.handleName = this._handleName.bind(this);
        this.handleTech = this._handleTech.bind(this);
        this.handleTime = this._handleTime.bind(this);
        this.handleLink = this._handleLink.bind(this);
        // this.handleProj = this._handleLink.bind(this);

        this.delProject = this._delProject.bind(this);
        this.editProject = this._editProject.bind(this);

        this.handleDetails = this._handleDetails.bind(this);
    }

    _handleDetails(state) {
        this.setState({ details: state }, this.editProject);
    }

    _delProject() {
        const { delFunc, uuid } = this.props;
        delFunc(uuid);
    }

    _editProject() {
        const { editFunc, uuid } = this.props;
        editFunc(uuid, this.state);
    }

    _handleName(val) {
        this.setState({ name: val }, this.editProject);
    }

    _handleTech(val) {
        this.setState({ techUsed: val }, this.editProject);
    }

    _handleTime(val) {
        this.setState({ timeFrame: val }, this.editProject);
    }
    _handleLink(val) {
        this.setState({ link: val }, this.editProject);
    }

    render() {
        return (
            <div className="projects">
                <Field label="Project Name" changeHandler={this.handleName} />
                <Field label="Technologies Used" changeHandler={this.handleTech} />
                <Field label="Link (optional)" changeHandler={this.handleLink} />
                <Field label="Time-Frame" changeHandler={this.handleTime} />
                <MultiField subject="Project Bullet" setParentState={this.handleDetails} />
                <button className="del btn" onClick={this.delProject}>
                    Delete Project
                </button>
            </div>
        );
    }
}
