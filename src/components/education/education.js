import React, { Component } from "react";

import uniqid from "uniqid";
import EducationItem from "./educationItem";

export default class Education extends Component {
    constructor(props) {
        super(props);

        this.getNewObject = this._getNewObject.bind(this);

        this.state = {
            education: [this.getNewObject()],
        };
        this.delEduItem = this._delEduItem.bind(this);
        this.editEduItem = this._editEduItem.bind(this);
        this.addEduItem = this._addEduItem.bind(this);

        this.updateParentState = this._updateParentState.bind(this);
    }

    _updateParentState() {
        this.props.setParentState(this.state.education);
    }

    _delEduItem(uuid) {
        const index = this.state.education.findIndex((edu) => edu.uuid === uuid);
        if (index < 0) return;
        const newState = [...this.state.education];
        newState.splice(index, 1);
        this.setState({ education: newState }, this.updateParentState);
    }

    _editEduItem(uuid, newObj) {
        const index = this.state.education.findIndex((edu) => edu.uuid === uuid);
        if (index < 0) return;
        const newState = [...this.state.education];
        newState[index] = newObj;
        this.setState({ education: newState }, this.updateParentState);
    }
    _addEduItem() {
        const newArray = [...this.state.education, this.getNewObject()];
        this.setState({ education: newArray }, this.updateParentState);
    }

    _getNewObject() {
        return {
            //default element
            "Institute Name": "",
            Location: "",
            Degree: "",
            "Date From": "",
            "Date To": "",
            uuid: uniqid(),
        };
    }

    render() {
        return (
            <div className="education">
                <h1 className="group-title">Education</h1>
                {[...this.state.education].map((edu) => (
                    <div className="edu-element" key={edu.uuid}>
                        <EducationItem uuid={edu.uuid} delFunc={this.delEduItem} editFunc={this.editEduItem} />
                    </div>
                ))}
                <button className="add btn" onClick={this.addEduItem}>
                    Add Another Educational Experience
                </button>
            </div>
        );
    }
}
