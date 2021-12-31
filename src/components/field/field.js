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
                <label className="input-label" htmlFor="{this.id}">
                    {this.props.label}
                </label>
                <input className="input-field" id={this.id} onChange={this.handleChange} />
            </div>
        );
    }
}
