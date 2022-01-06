import React, { Component } from "react";

import uniqid from "uniqid";
import ExperienceItem from "./experienceItem";

export default class Experience extends Component {
    constructor(props) {
        super(props);

        this.getNewObject = this._getNewObject.bind(this);
        const { save } = this.props;
        if (save && save.length > 0) {
            this.state = {
                experience: save,
            };
        } else {
            this.state = {
                experience: [this.getNewObject()],
            };
        }
        this.delExpItem = this._delExpItem.bind(this);
        this.editExpItem = this._editExpItem.bind(this);
        this.addExpItem = this._addExpItem.bind(this);

        this.updateParentState = this._updateParentState.bind(this);
    }

    _updateParentState() {
        this.props.setParentState({ experience : this.state });
    }

    _delExpItem(uuid) {
        const index = this.state.experience.findIndex((exp) => exp.uuid === uuid);
        if (index < 0) return;
        const newState = [...this.state.experience];
        newState.splice(index, 1);
        this.setState({ experience: newState }, this.updateParentState);
    }

    _editExpItem(uuid, newObj) {
        const index = this.state.experience.findIndex((exp) => exp.uuid === uuid);
        if (index < 0) return;
        const newState = [...this.state.experience];
        newState[index] = newObj;
        this.setState({ experience: newState }, this.updateParentState);
    }
    _addExpItem() {
        const newArray = [...this.state.experience, this.getNewObject()];
        this.setState({ experience: newArray }, this.updateParentState);
    }

    _getNewObject() {
        return {
            //default element
            name: "",
            location: "",
            position: "",
            "Date From": "",
            "Date To": "",
            uuid: uniqid(),
        };
    }

    render() {
        return (
            <div className="experience">
                <h1 className="group-title">Experience</h1>
                {[...this.state.experience].map((exp) => (
                    <div className="exp-element" key={exp.uuid}>
                        <ExperienceItem uuid={exp.uuid} delFunc={this.delExpItem} editFunc={this.editExpItem} stateObj={exp} />
                    </div>
                ))}
                <button className="add btn" onClick={this.addExpItem}>
                    Add Another Activity
                </button>
            </div>
        );
    }
}
