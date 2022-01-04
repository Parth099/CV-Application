import React, { Component } from "react";
import "./resumeCompo.css";

export default class ExperienceInstance extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { expData } = this.props;
        return (
            <div className="resume-instance">
                <div className="ini-name">
                    <div className="bold">
                        {expData.name}
                        <span className="light">, {expData.location}</span>
                    </div>
                    <div className="dates">{`${expData["Date From"]} - ${expData["Date To"]}`}</div>
                </div>
                <div className="bold squeeze">{expData.position}</div>
                {expData.details &&
                    [...expData.details].map((detail) => (
                        <li className="detail" key={detail.uuid}>
                            {detail.val}
                        </li>
                    ))}
            </div>
        );
    }
}
