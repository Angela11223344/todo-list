import React from "react";

//CSS
import "./ToDoItem.css";


function ToDoItem(props) {
    const { todo, index, completeTodo, removeTodo } = props;

    return (
        <div className={`todo ${todo.isCompleted ? "complete" : ""}`}>
        {todo.text}
        <div>
        <button onClick={() => completeTodo(index)}>Complete!</button>
        <button onClick={() => removeTodo(index)}>Remove!</button>
        </div>
        </div>
    );
}

export default ToDoItem;