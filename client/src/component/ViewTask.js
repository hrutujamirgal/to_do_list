import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';

const ViewTask = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();
  const [, setCookies] = useCookies(["editTask", "editid"]);

  useEffect(() => {
    const getTask = async () => {
      try {
        const response = await fetch("http://localhost:5000/gettask");
        if (response.ok) {
          const data = await response.json();
          setTasks(data); 
        } else {
          window.alert("Sorry, unable to fetch tasks.");
        }
      } catch (error) {
        console.error("Error fetching tasks:", error);
        window.alert("Sorry, unable to fetch tasks.");
      }
    };
    getTask();
  }, []);

  const handleAddTask = () => {
    navigate("/addTask");
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/deletetask/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        window.alert("Deleted task successfully.");
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
      } else {
        window.alert("Sorry, unable to delete tasks.");
      }
    } catch (error) {
      console.error("Error deleting task:", error);
      window.alert("Sorry, unable to delete task.");
    }
  };

  const handleUpdate = (id) => {
    setCookies("editTask", true);
    setCookies("editid", id);
    navigate("/addTask");
  };

  return (
    <>
      <div className="indx">

        <h1>To Do List</h1>

        <div>
          <button onClick={handleAddTask}>Add Task</button>
        </div>
      </div>

      <div className="tab">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Due Date</th>
              <th>Update Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td data-label="Id">{task.id}</td>
                <td data-label="Title">{task.title}</td>
                <td data-label="Description">{task.description}</td>
                <td data-label="Status">{task.status}</td>
                <td data-label="Due Date">{task.duedate}</td>
                <td data-label="Update Status">
                  {task.status}
                </td>
                <td data-label="Actions">
                  <button onClick={() => handleUpdate(task.id)}>Update</button>
                  <button onClick={() => handleDelete(task.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewTask;
