import React, { Component } from "react";
import Field from "../field/field";

export default class ExperienceItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            location: "",
            position: "",
            "Date From": "",
            "Date To": "",
            uuid: props.uuid,
        };

        this.handleName = this._handleName.bind(this);
        this.handleLoc = this._handleLoc.bind(this);
        this.handlePosition = this._handlePosition.bind(this);
        this.handleDateFrom = this._handleDateFrom.bind(this);
        this.handleDateTo = this._handleDateTo.bind(this);

        this.delHandler = this._delHandler.bind(this);
        this.sendUpdate = this._sendUpdate.bind(this);
    }

    _sendUpdate() {
        const { editFunc, uuid } = this.props;
        editFunc(uuid, this.state);
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
                <Field id="" label="Employment/Activity Name" changeHandler={this.handleName} />
                <Field id="" label="Position" changeHandler={this.handlePosition} />
                <Field id="" label="Location" changeHandler={this.handleLoc} />
                <Field id="" label="Date From" changeHandler={this.handleDateFrom} />
                <Field id="" label="Date To" changeHandler={this.handleDateTo} />
                <button className="del btn" onClick={this.delHandler}>
                    Delete
                </button>
            </div>
        );
    }
}
