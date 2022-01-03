import React, { Component } from "react";
import "./educationInstance.css";
export default class EducationInstance extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { eduData } = this.props;
        return (
            <div className="edu-instance">
                <div className="ini-name">
                    <div className="name-loc">
                        {eduData["Institute Name"]}
                        <span className="loc">, {eduData.Location}</span>
                    </div>
                    <div className="dates">{`${eduData["Date From"]} - ${eduData["Date To"]}`}</div>
                </div>
                <div className="degree">{eduData.Degree}</div>
                {eduData.GPA && <div className="gpa">Cumulative GPA: {eduData.GPA}</div>}
                {eduData.details &&
                    [...eduData.details].map((detail) => (
                        <li className="detail" key={detail.uuid}>
                            {detail.val}
                        </li>
                    ))}
            </div>
        );
    }
}
