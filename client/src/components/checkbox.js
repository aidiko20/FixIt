import React from "react";
// import "./style.css"
function Checkbox(props) {
    return (
        <div>
            <input type="checkbox" label={props.label} onchange={() => props.onCheckboxChange} />
            {props.label}
        </div>
    );
}
export default Checkbox;