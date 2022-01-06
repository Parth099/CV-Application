import "./field.css";
const Field = (props) => {
    const handleChange = (evt) => {
        props.changeHandler(evt.target.value);
    };

    const id = props.id || "";
    return (
        <div className="input-container">
            <input className="input-field" id={id} onChange={handleChange} placeholder={props.label} defaultValue={props.defaultValue || ""} />
        </div>
    );
};

export default Field;
