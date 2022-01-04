import React, { Component } from "react";
import Field from "../field/field";
import MultiField from "../multiField/multiField";

export default class ExperienceItem extends Component {
    constructor(props) {
        super(props);
        const { stateObj } = this.props;
        if (stateObj && stateObj.uuid) {
            this.state = stateObj;
        } else {
            this.state = {
                name: "",
                location: "",
                position: "",
                "Date From": "",
                "Date To": "",
                details: [],
                uuid: props.uuid,
            };
        }

        this.handleName = this._handleName.bind(this);
        this.handleLoc = this._handleLoc.bind(this);
        this.handlePosition = this._handlePosition.bind(this);
        this.handleDateFrom = this._handleDateFrom.bind(this);
        this.handleDateTo = this._handleDateTo.bind(this);
        this.handleDetails = this._handleDetails.bind(this);

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

    _handleName(val) {
        this.setState({ name: val }, this.sendUpdate);
    }
    _handleLoc(val) {
        this.setState({ location: val }, this.sendUpdate);
    }
    _handlePosition(val) {
        this.setState({ position: val }, this.sendUpdate);
    }
    _handleDateFrom(val) {
        this.setState({ "Date From": val }, this.sendUpdate);
    }
    _handleDateTo(val) {
        this.setState({ "Date To": val }, this.sendUpdate);
    }

    _delHandler() {
        const { delFunc, uuid } = this.props;
        delFunc(uuid);
    }
    render() {
        return (
            <div className="edu-item">
                <Field id="" label="Employment/Activity Name" changeHandler={this.handleName} defaultValue={this.state.name} />
                <Field id="" label="Position" changeHandler={this.handlePosition} defaultValue={this.state.position} />
                <Field id="" label="Location" changeHandler={this.handleLoc} defaultValue={this.state.location} />
                <Field id="" label="Date From" changeHandler={this.handleDateFrom} defaultValue={this.state["Date From"]} />
                <Field id="" label="Date To" changeHandler={this.handleDateTo} defaultValue={this.state["Date To"]} />
                <MultiField subject="Activity Detail" setParentState={this.handleDetails} defaultValue={this.state.details} />
                <button className="del btn" onClick={this.delHandler}>
                    Delete Experience
                </button>
            </div>
        );
    }
}
