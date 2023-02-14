import React from "react";

//CSS
import "./ToDoItem.css";


// function ToDoItem(props) {
//     const { todo, index, completeTodo, removeTodo, notComplete, updateRank } = props;

function ToDoItem(props) {
        const { todo, index, completeTodo, notComplete, importantTodo, removeTodo } = props;

    return (
        <div className={`todo ${todo.isCompleted ? "complete" : ""}`}> 
        <div className={`isImportant, todo ${todo.isImportant ? "important" : ""}`}>
            {todo.text}
        <div>
        <button onClick={() => completeTodo(index)}>Done!</button>
        <button onClick={() => notComplete(index)}>Not completed!</button>
        <button onClick={() => importantTodo(index)}>!</button>
        <button onClick={() => removeTodo(index)}>X</button>
        {/* <select onChange={(event) => updateRank (index, event.target.value)}></select> */}
        </div>
        </div>
        </div>
    );
}

export default ToDoItem;