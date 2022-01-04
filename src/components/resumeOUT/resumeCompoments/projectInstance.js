import React, { Component } from "react";
import "./resumeCompo.css";

export default class ProjectInstance extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { projData } = this.props;
        return (
            <div className="resume-instance">
                <div className="ini-name">
                    <div className="bold">
                        {projData.name}
                        <span className="light"> ({projData.techUsed})</span>
                    </div>
                    <div className="dates">{projData.timeFrame}</div>
                </div>
                {projData.link && <div className="squeeze-low">Link :{projData.link}</div>}
                {projData.details &&
                    [...projData.details].map((detail) => (
                        <li className="detail squeeze-low" key={detail.uuid}>
                            {detail.val}
                        </li>
                    ))}
            </div>
        );
    }
}
