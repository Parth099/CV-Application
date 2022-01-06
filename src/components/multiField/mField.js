//mField has no state and thus no imports
const MField = (props) => {
    const handleChange = (event) => {
        const { editFunc, uuid } = props;
        editFunc(uuid, event.target.value);
    };
    const handleDelete = () => {
        const { delFunc, uuid } = props;
        delFunc(uuid);
    };

    return (
        <div className="mField-container">
            <input className="mField-field" placeholder={props.label + "(optional)"} onChange={handleChange} defaultValue={props.defaultValue} />
            <button className="del btn btn-sm" onClick={handleDelete}>
                🗑️
            </button>
        </div>
    );
};

export default MField;
