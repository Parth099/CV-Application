import { useState } from "react";
import ProjectItem from "./projectItem";
import uniqid from "uniqid";
const Project = (props) => {
    const generateDefaultObject = () => {
        return { name: "", techUsed: "", timeFrame: "", link: "", details: [], uuid: uniqid() };
    };
    const [projects, setProjects] = useState([generateDefaultObject()]);
    const { setParentState } = props;
    const delProject = (uuid) => {
        const index = projects.findIndex((proj) => proj.uuid === uuid);
        if (index < 0) return;
        const newState = [...projects];
        newState.splice(index, 1);
        setProjects(newState);
        setParentState(newState);
    };

    const editProject = (uuid, newObj) => {
        const index = projects.findIndex((proj) => proj.uuid === uuid);
        if (index < 0) return;
        const newState = [...projects];
        newState[index] = newObj;
        setProjects(newState);
        setParentState(newState);
    };

    const addProject = () => {
        setProjects([...projects, generateDefaultObject()]);
    };

    return (
        <div className="projects-container">
            <h1 className="group-title">Projects</h1>
            {[...projects].map((proj) => (
                <div className="project-element" key={proj.uuid}>
                    <ProjectItem uuid={proj.uuid} delFunc={delProject} editFunc={editProject} stateObj={proj} />
                </div>
            ))}
            <button className="add btn" onClick={addProject}>
                Add Another Project
            </button>
        </div>
    );
};

export default Project;
