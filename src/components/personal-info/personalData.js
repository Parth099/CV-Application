import "./personalData.css";
import React, { Component } from "react";
import Field from "../field/field";

export default class PersonalData extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.personalData;

        //updater functions
        this.handleFName = this._handleFName.bind(this);
        this.handleLName = this._handleLName.bind(this);
        this.handleTitle = this._handleTitle.bind(this);
        this.handleEmail = this._handleEmail.bind(this);
        this.handlePhoneNum = this._handlePhoneNum.bind(this);
        this.handleZip = this._handleZip.bind(this);
        this.handleCityState = this._handleCityState.bind(this);

        this.updateParentState = this._updateParentState.bind(this);
    }

    _updateParentState() {
        this.props.setParentState(this.state);
    }

    _handleFName(val) {
        this.setState({ "First Name": val }, this.updateParentState);
    }
    _handleLName(val) {
        this.setState({ "Last Name": val }, this.updateParentState);
    }
    _handleTitle(val) {
        this.setState({ Title: val }, this.updateParentState);
    }
    _handleEmail(val) {
        this.setState({ Email: val }, this.updateParentState);
    }
    _handlePhoneNum(val) {
        this.setState({ phoneNum: val }, this.updateParentState);
    }
    _handleZip(val) {
        this.setState({ zip: val }, this.updateParentState);
    }
    _handleCityState(val) {
        this.setState({ cityState: val }, this.updateParentState);
    }

    render() {
        return (
            <div className="pd-container">
                <h1 className="group-title">Personal Information</h1>
                <Field id="fname" label="First Name" changeHandler={this.handleFName} />
                <Field id="lname" label="Last Name" changeHandler={this.handleLName} />
                <Field id="title" label="Title" changeHandler={this.handleTitle} />
                <Field id="email" label="Email" changeHandler={this.handleEmail} />
                <Field id="phoneNum" label="Phone Number" changeHandler={this.handlePhoneNum} />
                <Field id="cityState" label="City, State" changeHandler={this.handleCityState} />
            </div>
        );
    }
}
