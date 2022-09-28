import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
 
const TaskList = () => {
  const [tasks, setTask] = useState([]);
 
  useEffect(() => {
    getTasks();
  }, []);
 
  const getTasks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/tasks");
      setTask(response.data);
    } catch ( error ) {
      console.log( "Error :", error )
      console.log( "Error Response :", error.response )
      console.log( "Error Response Data :", error.response.data )
    }
  };
 
  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${id}`);
      getTasks();
    } catch (error) {
      console.log( "Error :", error )
      console.log( "Error Response :", error.response )
      console.log( "Error Response Data :", error.response.data )
    }
  };
 
  return (
    <div className="columns">
      <div className="column">
        <nav class="navbar" role="navigation" aria-label="main navigation" style={{ padding: "10px", backgroundColor: "#f0f0f0" }}>
          <h2>Tasks</h2>
          <div style={{ display: "flex" }}>
            <Link to="add" className="button is-success" style={{ marginLeft: "auto" }}>
              +
            </Link>
          </div>
        </nav>
        {tasks.map((task, index) => (
          <tr key={task._id} style={{ margin: "10px" }}>
            <td style={{ marginRight: "10px" }}>{task.name}</td>
            <td style={{ marginLeft: "10px" }}>
              <Link
                to={`edit/${task._id}`}
                className="button is-info is-small mr-1"
              >
                Edit
              </Link>
              <button
                onClick={() => deleteTask(task._id)}
                className="button is-danger is-small"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </div>
      <div className="column">
        <nav class="navbar" role="navigation" aria-label="main navigation" style={{ padding: "18px", backgroundColor: "#f0f0f0" }}>
          <h2>Created: Sept 28th, 01:00 pm</h2>
        </nav>
        {tasks.map((task, index) => (
          <tr key={task._id} style={{ margin: "10px" }}>
            <h1>Description</h1>
            <tr style={{ marginRight: "10px" }}>{task.description}</tr>
            <h1>Comments</h1>
            <tr style={{ marginRight: "10px" }}>{task.comment}</tr>
            <hr style={{ height: "1px", color: "gray", backgroundColor: "gray" }}/>
          </tr>
        ))}
      </div>
    </div>
  );
};

export default TaskList;