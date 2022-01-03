import React, { Component } from "react";
import Field from "../field/field";
import MultiField from "../multiField/multiField";

export default class EducationItem extends Component {
    constructor(props) {
        super(props);
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
                <Field id="" label="Institute Name" changeHandler={this.handleInsName} />
                <Field id="" label="Location" changeHandler={this.handleLoc} />
                <Field id="" label="Degree" changeHandler={this.handleDegree} />
                <Field id="" label="GPA (optional)" changeHandler={this.handleGPA} />
                <Field id="" label="Date From" changeHandler={this.handleDateFrom} />
                <Field id="" label="Date To" changeHandler={this.handleDateTo} />
                <MultiField subject="Education Detail" setParentState={this.handleDetails} />
                <button className="del btn" onClick={this.delHandler}>
                    Delete Education
                </button>
            </div>
        );
    }
}
