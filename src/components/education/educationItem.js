import React, { Component } from "react";
import Field from "../field/field";
import MultiField from "../multiField/multiField";

export default class EducationItem extends Component {
    constructor(props) {
        super(props);

        const { stateObj } = this.props;
        if (stateObj && stateObj.uuid) {
            this.state = stateObj;
        } else {
            this.state = {
                "Institute Name": "",
                Location: "",
                Degree: "",
                "Date From": "",
                "Date To": "",
                details: [],
                GPA: "",
                uuid: props.uuid,
            };
        }

        this.handleInsName = this._handleInsName.bind(this);
        this.handleLoc = this._handleLoc.bind(this);
        this.handleDegree = this._handleDegree.bind(this);
        this.handleDateFrom = this._handleDateFrom.bind(this);
        this.handleDateTo = this._handleDateTo.bind(this);
        this.handleDetails = this._handleDetails.bind(this);
        this.handleGPA = this._handleGPA.bind(this);

        this.delHandler = this._delHandler.bind(this);
        this.sendUpdate = this._sendUpdate.bind(this);
    }

    _sendUpdate() {
        const { editFunc, uuid } = this.props;
        editFunc(uuid, this.state);
    }

    _handleDetails(state) {
        this.setState({ details: state }, this.sendUpdate);
    }

    _handleInsName(val) {
        this.setState({ "Institute Name": val }, this.sendUpdate);
    }
    _handleLoc(val) {
        this.setState({ Location: val }, this.sendUpdate);
    }
    _handleDegree(val) {
        this.setState({ Degree: val }, this.sendUpdate);
    }
    _handleDateFrom(val) {
        this.setState({ "Date From": val }, this.sendUpdate);
    }
    _handleDateTo(val) {
        this.setState({ "Date To": val }, this.sendUpdate);
    }
    _handleGPA(val) {
        this.setState({ GPA: val }, this.sendUpdate);
    }

    _delHandler() {
        const { delFunc, uuid } = this.props;
        delFunc(uuid);
    }
    render() {
        return (
            <div className="edu-item">
                <Field id="" label="Institute Name" changeHandler={this.handleInsName} defaultValue={this.state["Institute Name"]} />
                <Field id="" label="Location" changeHandler={this.handleLoc} defaultValue={this.state.Location} />
                <Field id="" label="Degree" changeHandler={this.handleDegree} defaultValue={this.state.Degree} />
                <Field id="" label="GPA (optional)" changeHandler={this.handleGPA} defaultValue={this.state.GPA} />
                <Field id="" label="Date From" changeHandler={this.handleDateFrom} defaultValue={this.state["Date From"]} />
                <Field id="" label="Date To" changeHandler={this.handleDateTo} defaultValue={this.state["Date To"]} />
                <MultiField subject="Education Detail" setParentState={this.handleDetails} defaultValue={this.state.details} />
                <button className="del btn" onClick={this.delHandler}>
                    Delete Education
                </button>
            </div>
        );
    }
}
