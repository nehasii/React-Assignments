import React, { useState } from "react";
import "./ToDo.css";    

export default function TodoApp() {
  let [task, setTask] = useState("");
  let [tasks, setTasks] = useState([]);
  let [isbool, setIsbool] = useState(false);

  let changeTask = ({ target: { value } }) => {
    setTask(value);
  };

  let addTask = () => {
    setTasks([...tasks, task]);
    setTask("");
    setIsbool(true);
    setTimeout(() => {
      setIsbool(false);
    }, 2000);
  };

  let deleteTask = (index) => {
    let remainingTasks = tasks.filter((t, i) => {
      return index !== i;
    });

    setTasks(remainingTasks);
  };

  return (
    <section className="todo-container">
      {isbool && <h1 className="success-message">Added successfully</h1>}


      <div className="input-container">
        <input
          type="text"
          placeholder="Task"
          onChange={changeTask}
          value={task}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <div className="tasks-container">
        {tasks.map((t, i) => {
          return (
            <div key={i} className="task-item">
              <span>{t}</span>
              <button onClick={() => deleteTask(i)}>Delete</button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
