import React, { Component } from "react";

export default class MField extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this._handleChange.bind(this);
        this.handleDelete = this._handleDelete.bind(this);
    }

    _handleChange(evt) {
        const { editFunc, uuid } = this.props;
        editFunc(uuid, evt.target.value);
    }
    _handleDelete() {
        const { delFunc, uuid } = this.props;
        delFunc(uuid);
    }

    render() {
        return (
            <div className="mField-container">
                <input className="mField-field" placeholder={this.props.label + "(optional)"} onChange={this.handleChange} />
                <button className="del btn btn-sm" onClick={this.handleDelete}>
                    🗑️
                </button>
            </div>
        );
    }
}
