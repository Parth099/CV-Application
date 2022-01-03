import "./multiField.css";
import React, { Component } from "react";

import MField from "./mField";
import uniqid from "uniqid";

export default class MultiField extends Component {
    constructor(props) {
        super(props);

        this.getDefaultObj = this._getDefaultObj.bind(this);
        this.state = {
            arr: [this.getDefaultObj()], //goal of a multiField is to keep a array[Obj] in state
        };

        this.addElement = this._addElement.bind(this);
        this.delElement = this._delElement.bind(this);
        this.editElement = this._editElement.bind(this); //sync to state
        this.sendUpdate = this._sendUpdate.bind(this);
    }

    _sendUpdate() {
        this.props.setParentState(this.state.arr);
    }

    _getDefaultObj() {
        return { val: "", uuid: uniqid() };
    }
    _addElement() {
        const newState = [...this.state.arr, this.getDefaultObj()];
        this.setState({ arr: newState }); //we dont need to send an update if a field is created
    }
    _editElement(uuid, val) {
        const idx = this.state.arr.findIndex((ele) => ele.uuid === uuid);
        if (idx < 0) return;
        const newState = [...this.state.arr];
        newState[idx].val = val;
        this.setState({ arr: newState }, this.sendUpdate);
    }
    _delElement(uuid) {
        const idx = this.state.arr.findIndex((ele) => ele.uuid === uuid);
        if (idx < 0) return;
        const newState = [...this.state.arr];
        newState.splice(idx, 1);
        this.setState({ arr: newState }, this.sendUpdate);
    }

    render() {
        return (
            <div className={"multi-Field " + this.props.subject}>
                <h1 className="group-title">{this.props.subject + "s"}</h1>
                <div className="MF-container">
                    {[...this.state.arr].map((mField, idx) => (
                        <MField
                            label={`Enter ${this.props.subject} ` + (idx + 1)}
                            uuid={mField.uuid}
                            editFunc={this.editElement}
                            delFunc={this.delElement}
                            title={this.props.subject}
                            key={mField.uuid}
                        />
                    ))}
                </div>
                <button className="add btn" onClick={this.addElement}>
                    Add new {this.props.subject}
                </button>
            </div>
        );
    }
}
