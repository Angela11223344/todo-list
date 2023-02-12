import React from "react";

//CSS
import "./ToDoItem.css";


// function ToDoItem(props) {
//     const { todo, index, completeTodo, removeTodo, notComplete, updateRank } = props;

function ToDoItem(props) {
        const { todo, index, completeTodo, removeTodo, notComplete } = props;

    return (
        <div className={`todo ${todo.isCompleted ? "complete" : ""}`}>
            {todo.text}
        <div>
        <button onClick={() => completeTodo(index)}>Complete!</button>
        <button onClick={() => notComplete(index)}>Not yet complete!</button>
        <button onClick={() => removeTodo(index)}>Remove!</button>
        {/* <select onChange={(event) => updateRank (index, event.target.value)}></select> */}
        </div>
        </div>
    );
}

export default ToDoItem;