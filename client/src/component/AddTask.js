/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const AddTask = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
    status: "",
    duedate: "",
  });
  const navigate = useNavigate();
  const [cookies, , removeCookies] = useCookies(["editTask", "editid"]);

  const getTask = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/getOneTask/${id}`);
      if (response.ok) {
        const task = await response.json();
        console.log(task);
        setData(task);
      } else {
        window.alert("Sorry, unable to fetch task.");
      }
    } catch (error) {
      console.error("Error fetching task:", error);
      window.alert("Sorry, unable to fetch task.");
    }
  };

  useEffect(() => {
    if (cookies.editTask) {
      getTask(cookies.editid);
    }
  }, [cookies.editTask, cookies.editid]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (cookies.editTask) {
      const response = await fetch(`http://localhost:5000/updatetask/${cookies.editid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.status === 201) {
        window.alert("Task Updated Successfully");
        removeCookies("editTask");
        removeCookies("editid");
        navigate("/");
      } else {
        window.alert("Problem Updating Task");
      }
    } else {
      const response = await fetch("http://localhost:5000/addtask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.status === 201) {
        window.alert("Task Added Successfully");
        navigate("/");
      } else {
        window.alert("Problem Adding Task");
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      {cookies.editTask ? <h1>Update Task</h1> : <h1>Add Task</h1>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={data.title}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={data.description}
          onChange={handleChange}
        />
        <select name="status" value={data.status} onChange={handleChange}>
          <option value="">Select Status</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In-Progress</option>
          <option value="completed">Completed</option>
        </select>
        <input
          type="date"
          placeholder="Due Date"
          name="duedate"
          value={data.duedate}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => navigate("/")}>Go Back</button>
    </>
  );
};

export default AddTask;
