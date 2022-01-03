import React, { Component } from "react";
import "./resume.css";
export default class Resume extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { info } = this.props;
        const { personalData } = info;
        return (
            <div className="resume-container">
                <div className="resume-personal-data">
                    <div className="head">
                        {`${personalData["First Name"]} ${personalData["Last Name"]}`}
                        <span className="font-sm"> {personalData.Title}</span>
                    </div>
                    <div className="flex-info-col">
                        <p className="info-col">{personalData.Email}</p>
                        <p className="info-col">{personalData.phoneNum}</p>
                        <p className="info-col">{personalData.cityState}</p>
                        
                    </div>
                </div>
                <p>{JSON.stringify(info)}</p>
            </div>
        );
    }
}
