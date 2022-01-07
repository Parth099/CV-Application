import React, { useState } from "react";
import Field from "../field/field";
import MultiField from "../multiField/multiField";

const ProjectItem = (props) => {
    //props will ALWAYS contain a object with
    /*
        name: str
        techUsed: str
        timeFrame: str
        link: str
        details: [obj]
        uuid: str
    */
    const [name, setName] = useState("");
    const [techUsed, setTechUsed] = useState("");
    const [timeFrame, setTimeFrame] = useState("");
    const [link, setLink] = useState("");
    const [details, setDetails] = useState([]);
    const { editFunc, uuid } = props;

    const delProject = () => {
        const { delFunc } = props;
        delFunc(uuid);
    };

    //reduce lines with hashing [IDEA]
    const updateName = (newName) => {
        setName(newName);
        editFunc(uuid, { name: newName, techUsed, timeFrame, link, details, uuid });
    };

    const updateTechUsed = (newTU) => {
        setTechUsed(newTU);
        editFunc(uuid, { name, techUsed: newTU, timeFrame, link, details, uuid });
    };

    const updateTimeFrame = (newTF) => {
        setTimeFrame(newTF);
        editFunc(uuid, { name, techUsed, timeFrame: newTF, link, details, uuid });
    };

    const updateLink = (newLink) => {
        setLink(newLink);
        editFunc(uuid, { name, techUsed, timeFrame, link: newLink, details, uuid });
    };

    const updateDetails = (newDetails) => {
        setDetails(newDetails);
        editFunc(uuid, { name, techUsed, timeFrame, link, details: newDetails, uuid });
    };

    return (
        <div className="projects">
            <Field label="Project Name" changeHandler={updateName} defaultValue={name} />
            <Field label="Technologies Used" changeHandler={updateTechUsed} defaultValue={techUsed} />
            <Field label="Link (optional)" changeHandler={updateLink} defaultValue={link} />
            <Field label="Time-Frame" changeHandler={updateTimeFrame} defaultValue={timeFrame} />
            <MultiField subject="Project Bullet" setParentState={updateDetails} defaultValue={details} />
            <button className="del btn" onClick={delProject}>
                Delete Project
            </button>
        </div>
    );
};
export default ProjectItem;
