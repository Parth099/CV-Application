import React, { Component } from "react";
import Field from "../field/field";
import MultiField from "../multiField/multiField";

export default class ProjectItem extends Component {
    constructor(props) {
        super(props);

        const { stateObj } = this.props;
        if (stateObj && stateObj.uuid) {
            this.state = stateObj;
        } else {
            this.state = {
                name: "",
                techUsed: "",
                timeFrame: "",
                link: "",
                details: [],
                uuid: props.uuid,
            };
        }

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
                <Field label="Project Name" changeHandler={this.handleName} defaultValue={this.state.name} />
                <Field label="Technologies Used" changeHandler={this.handleTech} defaultValue={this.state.techUsed} />
                <Field label="Link (optional)" changeHandler={this.handleLink} defaultValue={this.state.link} />
                <Field label="Time-Frame" changeHandler={this.handleTime} defaultValue={this.state.timeFrame} />
                <MultiField subject="Project Bullet" setParentState={this.handleDetails} defaultValue={this.state.details} />
                <button className="del btn" onClick={this.delProject}>
                    Delete Project
                </button>
            </div>
        );
    }
}
