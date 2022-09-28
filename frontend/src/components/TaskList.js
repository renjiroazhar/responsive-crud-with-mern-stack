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
      console.log(error);
    }
  };
 
  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <Link to="add" className="button is-success">
          Add New
        </Link>
        <table className="table is-striped is-fullwidth mt-2">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Description</th>
              <th>Comment</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={task._id}>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td>{task.description}</td>
                <td>{task.comment}</td>
                <td>
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskList;