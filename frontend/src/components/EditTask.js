import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
 
const EditTask = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [comment, setComment] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
 
  useEffect(() => {
    getTaskById();
  }, []);
 
  const getTaskById = async () => {
    const response = await axios.get(`http://localhost:5000/tasks/${id}`);
    setName(response.data.name);
    setDescription(response.data.description);
    setComment(response.data.comment);
  };
 
  const updateTask = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/tasks/${id}`, {
        name,
        description,
        comment,
      });
      navigate("/");
    } catch (error) {
      console.log( "Error :", error )
      console.log( "Error Response :", error.response )
      console.log( "Error Response Data :", error.response.data )
    }
  };
 
  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={updateTask}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Comment</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Comment"
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTask;