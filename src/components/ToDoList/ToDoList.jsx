import React from "react";

//CSS
import "./ToDoList.css";

function ToDoList(props) {
    const { index, deleteCompleted } = props; 

    return (
        <div>
        <button onClick={() => deleteCompleted(index)}>Clear completed items!</button>
        </div>
    );
}

export default ToDoList;