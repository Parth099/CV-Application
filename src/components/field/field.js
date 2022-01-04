import "./field.css";
import React, { Component } from "react";

export default class Field extends Component {
    constructor(props) {
        super(props);
        this.id = this.props.id || "";
        this.handleChange = this._handleChange.bind(this);
    }

    _handleChange(evt) {
        this.props.changeHandler(evt.target.value);
    }

    render() {
        return (
            <div className="input-container">
                <input
                    className="input-field"
                    id={this.id}
                    onChange={this.handleChange}
                    placeholder={this.props.label}
                    defaultValue={this.props.defaultValue || ""}
                />
            </div>
        );
    }
}
