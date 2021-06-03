import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { title: "Faire les courses", isDone: false },
    { title: "Arroser les plantes", isDone: true },
    { title: "Aller au musée", isDone: true },
  ]);
  const [newTaskInput, setNewTaskInput] = useState("");

  return (
    <div>
      <h1>To do list</h1>

      {tasks.map((task, index) => {
        return (
          <div>
            <input
              checked={task.isDone}
              type="checkbox"
              onClick={() => {
                const newTasks = [...tasks];
                console.log(newTasks[index]);
                if (newTasks[index].isDone === true) {
                  newTasks[index].isDone = false;
                } else {
                  newTasks[index].isDone = true;
                }

                setTasks(newTasks);
              }}
            />
            <span className={task.isDone === true ? "checked" : ""}>
              {task.title}
            </span>
            <button>Supprimer</button>
          </div>
        );
      })}

      <form
        onSubmit={(event) => {
          event.preventDefault();
          const newTasks = [...tasks];
          newTasks.push({
            title: newTaskInput,
            isDone: false,
          });
          setTasks(newTasks);
          setNewTaskInput("");
        }}
      >
        <input
          type="text"
          value={newTaskInput}
          onChange={(event) => {
            const value = event.target.value;
            setNewTaskInput(value);
          }}
        />
        <button type="submit">Add task</button>
      </form>
    </div>
  );
}

export default App;
