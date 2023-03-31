import React from "react";

const Child = (props) => {
    const data = "I am from child component."
    props.onChildData(data)
    return (
        <div>
            <p>I am Child component.</p>
            <p>{props.data2}</p>
        </div>
    )
};
export default Child;