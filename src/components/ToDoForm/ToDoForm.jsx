import React, { useState } from "react"

//CSS
import "./ToDoForm.css";

function ToDoForm(props) {

    // Props
    const { addTodo, deleteAll } = props;

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
        <>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add to-do..."
                value={todo}
                onChange={(event) => setTodo(event.target.value)}/> 
                <button>Submit</button>
        </form>
        <button onClick={() => deleteAll()}>Clear ALL!</button>
        </>
    );
}

export default ToDoForm;