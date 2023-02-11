import React, { useState } from "react"

function ToDoForm(props) {

    // Props
    const { addTodo } = props;

    //State
    const [todo, setTodo] = useState("");

    //Action
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!todo) {
            return;
        }
            addTodo(todo);
            setTodo("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="Add todo..." 
            value={todo} 
            onChange={(event) => setTodo(event.target.value)}
            />
        </form>
    );
}

export default ToDoForm;