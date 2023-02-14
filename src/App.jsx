import React, { useState } from "react";

// Components
import ToDoForm from "./components/ToDoForm/ToDoForm";
import ToDoItem from "./components/ToDoItem/ToDoItem";
import ToDoList from "./components/ToDoList/ToDoList";

//CSS
import "./App.css";


function App() {

    // //State
    // const [todos, setTodos] = useState([
    //   { text: "Do this", isCompleted: false, ranking:"1" },
    //   { text: "Do that", isCompleted: false, ranking:"2" },
    //   { text: "Maybe something else", isCompleted: false, ranking:"3" },
    // ]);

    //State
    const [todos, setTodos] = useState([
      { text: "Take the dog for a walk", isCompleted: false, isImportant: false },
      { text: "Buy milk", isCompleted: true, isImportant: false },
      { text: "Water the plants", isCompleted: false, isImportant: true },
      { text: "Go for a run", isCompleted: true, isImportant: false },
      { text: "Cook dinner", isCompleted: false, isImportant: false }

    ]);

    //Actions
    const addTodo = (text) => {
      const newTodos = [...todos, { text: text, isComplete: false }];
      setTodos(newTodos);
    };

    const completeTodo = (index) => {
      const newTodos = [...todos];
      newTodos[index].isCompleted = true;
      setTodos(newTodos);
    };

    const notComplete = (index) => {
      const newTodos = [...todos];
      newTodos[index].isCompleted = false;
      setTodos(newTodos);
    }

    const importantTodo = (index) => {
      const newTodos = [...todos];
      newTodos[index].isImportant = true;
      setTodos(newTodos); 
    }

    const removeTodo = (index) => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    }

    const deleteCompleted = () => {
      const newTodos = todos.filter(todo => {
        return !todo.isCompleted;
      });
      setTodos(newTodos);
    }

    const deleteAll = () => {
      const newTodos = [];
      setTodos(newTodos);
    }

    // const updateRank = (index, newRanking) => {
    //   const newTodos = [...todos];
    //   newTodos[index].ranking = newRanking;
    //   newTodos.sort((todoNew, todoOld) => {
    //     return todoNew.ranking - todoOld.ranking;
    //   });
    //   setTodos(newTodos);
    // };

  return (
    <div className="app">
      <div className="todo-list">
        <h1>My ToDo List</h1>
        {todos.map((todo, index) => (
          <ToDoItem 
          key={index} 
          todo={todo} 
          index={index} 
          completeTodo={completeTodo} 
          notComplete={notComplete}
          importantTodo={importantTodo}
          removeTodo={removeTodo}
          //updateRank={newRanking}
          //rankMax={todos.length}
          />
      ))}
        <ToDoList
        deleteCompleted={deleteCompleted}
        />  
        <ToDoForm 
        addTodo={addTodo}
        deleteAll={deleteAll}
        />
      </div>  
    </div>
  );
}

export default App;