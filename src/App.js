import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <div>
      <h1>To do list</h1>
      <div>
        <input type="checkbox" />
        <span>Rester concentré pendant le cours</span>
        <button>Supprimer</button>
      </div>
      <form
        onSubmit={() => {
          alert("submitted");
        }}
      >
        <input type="text" />
        <button type="submit">Add task</button>
      </form>
    </div>
  );
}

export default App;
