import "./multiField.css";
import React, { useState } from "react";
import MField from "./mField";
import uniqid from "uniqid";

//parent of data
const MultiField = (props) => {
    const generateDefaultObject = () => {
        return { val: "", uuid: uniqid() };
    };

    //declare basic state
    const [arr, setArr] = useState([generateDefaultObject()]);

    /*
        these operations are required on this 'state' arr
        1. ADD (append) object
        2. EDIT object based on UUID
        3. DELETE object based on UUID
        4. SEND update to parent

    */

    const addElement = () => {
        setArr([...arr, generateDefaultObject()]);
    };

    const editElement = (id, value) => {
        const idx = arr.findIndex((ele) => ele.uuid === id);
        if (idx < 0) return;
        const newArr = [...arr];
        newArr[idx].val = value;
        setArr(newArr);
        props.setParentState(newArr);
    };

    const delElement = (id) => {
        const idx = arr.findIndex((ele) => ele.uuid === id);
        if (idx < 0) return;
        const newArr = [...arr];
        newArr.splice(idx, 1);
        setArr(newArr);
        props.setParentState(newArr);
    };

    return (
        <div className={"multi-Field " + props.subject}>
            <h1 className="group-title">{props.subject + "s"}</h1>
            <div className="MF-container">
                {[...arr].map((data, idx) => (
                    <MField
                        label={`Enter ${props.subject} ` + (idx + 1)}
                        uuid={data.uuid}
                        editFunc={editElement}
                        delFunc={delElement}
                        title={props.subject}
                        key={data.uuid}
                        defaultValue={data.val}
                    />
                ))}
            </div>
            <button className="add btn" onClick={addElement}>
                Add new {props.subject}
            </button>
        </div>
    );
};

export default MultiField;
