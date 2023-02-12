import React, { useState } from "react"

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
                onChange={(event) => setTodo(event.target.value)} />
        </form>
        <button onClick={() => deleteCompleted(index)}>Delete all completed items!</button>
        <button onClick={() => deleteAll()}>Delete all todos!</button>
        </>
    );
}

export default ToDoForm;