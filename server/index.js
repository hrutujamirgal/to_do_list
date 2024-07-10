const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// In-memory storage
const tasks = [];
let idCount = 1;
const port = 5000;

// POST - Add a new task
app.post("/addtask", (req, res) => {
 
  const { title, description, status, duedate } = req.body;
  const addTask = { id: idCount++, title, description, status, duedate };

  tasks.push(addTask);
  res.status(201).json(addTask);
});

// GET - Get all tasks
app.get("/gettask", (req, res) => {
  res.json(tasks);
});

// GET - Get a specific task
app.get("/getOneTask/:id", (req, res) => {
  const oneTask = tasks.find(task => task.id === parseInt(req.params.id));
  if (oneTask) {
    res.json(oneTask);
  } else {
    res.status(404).json({ message: "Invalid id" });
  }
});

// DELETE - Delete a task
app.delete("/deletetask/:id", (req, res) => {
  const taskIndex = tasks.findIndex(task => task.id === parseInt(req.params.id));
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: "Requested task not found" });
  }
});

// PUT - Update a task
app.put("/updatetask/:id", (req, res) => {
  const taskIndex = tasks.findIndex(task => task.id === parseInt(req.params.id));
  console.log(taskIndex)
  if (taskIndex !== -1) {
    tasks[taskIndex] = { id: parseInt(req.params.id), ...req.body };
    res.status(201).json(tasks[taskIndex]);
  } else {
    res.status(404).json({ message: "No task found with given id" });
  }
});

app.listen(port, () => {
  console.log(`Task manager listening on port ${port}`);
});
