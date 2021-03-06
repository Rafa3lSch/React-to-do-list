import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTaskInput, setNewTaskInput] = useState("");

  return (
    <>
      <Header />
      <div className="container">
        {tasks.map((task, index) => {
          return (
            <div>
              <input
                checked={task.isDone}
                type="checkbox"
                onClick={() => {
                  const newTasks = [...tasks];

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
              <button
                className="trash-btn"
                onClick={() => {
                  const newTasks = [...tasks];
                  newTasks.splice(index, 1);
                  setTasks(newTasks);
                }}
              >
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>
          );
        })}

        <form
          className="form"
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
            className="task-input"
            type="text"
            value={newTaskInput}
            onChange={(event) => {
              const value = event.target.value;
              setNewTaskInput(value);
            }}
          />
          <button className="add-task" type="submit">
            Add task
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default App;
