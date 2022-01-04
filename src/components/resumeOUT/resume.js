import React, { Component } from "react";
import "./resume.css";
import EducationInstance from "./resumeCompoments/educationInstance";
import ExperienceInstance from "./resumeCompoments/expInstance";
import ProjectInstance from "./resumeCompoments/projectInstance";
import TechnicalSkills from "./resumeCompoments/techSkills";

export default class Resume extends Component {
    constructor(props) {
        super(props);
        this.reset = this._reset.bind(this);
    }
    _reset() {
        this.props.reset();
        window.location.reload();
    }
    render() {
        const { info } = this.props;
        const { personalData } = info;
        const { education } = info;
        const { experience } = info;
        const { skills } = info;
        const { project } = info;
        return (
            <div>
                <div className="resume-container" id="resume">
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
                    <div className="edu-container container">
                        {education.length > 0 && <p className="section-title">Education</p>}
                        {education.length > 0 && [...education].map((eduObj) => <EducationInstance eduData={eduObj} key={eduObj.uuid} />)}
                    </div>
                    <div className="exp-container container">
                        {experience.length > 0 && <p className="section-title">Experience</p>}
                        {experience.length > 0 && [...experience].map((expObj) => <ExperienceInstance expData={expObj} key={expObj.uuid} />)}
                    </div>
                    <div className="skills-container container">
                        {skills.length > 0 && <p className="section-title">Skills: </p>}
                        <TechnicalSkills skills={skills} />
                    </div>
                    <div className="proj-container container">
                        {project.length > 0 && <p className="section-title">Projects</p>}
                        {project.length > 0 && [...project].map((projObj) => <ProjectInstance projData={projObj} key={projObj.uuid} />)}
                    </div>
                </div>
                <div className="resume-footer">
                    <button className="btn warn resume-btn" onClick={this.props.download}>
                        Download PDF [NOT WORKING]
                    </button>
                    <button className="btn del resume-btn" onClick={this.reset}>
                        Reset
                    </button>
                </div>
            </div>
        );
    }
}
