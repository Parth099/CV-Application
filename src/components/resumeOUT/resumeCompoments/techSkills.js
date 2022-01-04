import React, { Component } from "react";
import "./resumeCompo.css";

export default class TechnicalSkills extends Component {
    constructor(props) {
        super(props);
        this.filterlist = this._filterlist.bind(this);
    }
    _filterlist(arr) {
        //arr is in the form [{val, uuid}]
        const newArr = new Array(arr.length);
        arr.forEach((element, idx) => {
            newArr[idx] = element.val;
        });

        return newArr.join(", "); //str
    }
    render() {
        const { skills } = this.props;
        return (
            <div className="eval-cont">
                {skills.length > 0 && (
                    <div className="bold skills-flex">
                        <p className="tSkills-text">Technical Skills:</p>
                        <p className="light skills">{this.filterlist(skills)}</p>
                    </div>
                )}
            </div>
        );
    }
}
