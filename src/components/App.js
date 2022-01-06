import "./App.css";

import React, { useState, useEffect } from "react";

import Header from "./head/header";
import PersonalData from "./personal-info/personalData";
import Education from "./education/education";
import Experience from "./exp/experience";
import Project from "./projects/project";
import MultiField from "./multiField/multiField";
import Resume from "./resumeOUT/resume";

const App = () => {
    //declare State
    const [personalData, setPersonalData] = useState({
        "First Name": "",
        "Last Name": "",
        Title: "",
        Email: "",
        phoneNum: "",
        zip: "",
        cityState: "",
    });
    const [education, setEducation] = useState([]);
    const [experience, setExperience] = useState([]);
    const [project, setProject] = useState([]);
    const [skills, setskills] = useState([]);

    const sf = () => {
        console.log(personalData);
        console.log(education);
        console.log(experience);
        console.log(project);
        console.log(skills);
    };

    return (
        <div className="App-main">
            <Header appName="CS CV-Application" sf={sf} />
            <div className="flex-container">
                <div className="flex-col-left">
                    <PersonalData setParentState={setPersonalData} personalData={personalData} />
                    <Education setParentState={setEducation} save={education} />
                    <Experience setParentState={setExperience} save={experience} />
                    <Project setParentState={setProject} save={project} />
                    <MultiField setParentState={setskills} defaultValue={skills} subject="Skill" />
                </div>
                {/* needs full conversion or inc+ in params */}
                {false && (
                    <div className="flex-col-right">
                        <Resume info={this.state} reset={this.LocalStorageClient.reset} download={() => {}} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;
