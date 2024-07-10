# To-Do List Web App

A To-Do List application that allows users to manage their tasks. The application supports creating, reading, updating, and deleting (CRUD) tasks. Each task has a title, description, status (e.g., pending, in-progress, completed), and due date.

## Features

- Task List Page
  - Display a list of all tasks with their title, status, and due date.
  - Include buttons for editing and deleting each task.
  - Add a button to create a new task.
- Task Form Page
  - A form for creating and editing tasks with fields: Title, Description, Status, and Due Date.
  - The form is used for both creating a new task and updating an existing task.

## Backend API Endpoints

- `GET /tasks`: Retrieve all tasks.
- `GET /tasks/:id`: Retrieve a single task by ID.
- `POST /tasks`: Create a new task.
- `PUT /tasks/:id`: Update an existing task by ID.
- `DELETE /tasks/:id`: Delete a task by ID.

## Data Storage

- Use an in-memory data storage mechanism to store tasks.
- Each task has a unique ID, title, description, status, and due date.


## Instructions to Run the App

### Prerequisites
Make sure you have Node.js and npm (Node Package Manager) installed on your machine.
    
### Frontend (React)

#### Installing and Running the Frontend

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/hrutujamirgal/to_do_list.git
   cd to_do_list
   ```

2. **Install Frontend Dependencies:**
   ```bash
   cd client   
   npm install
   ```

3. **Running the Frontend Application:**
   ```bash
   npm start
   ```
   This command starts the React frontend in development mode and automatically opens it in your default web browser at `http://localhost:3000`. The page will reload if you make edits to the code.

### Backend (Node.js)

#### Installing and Running the Backend

1. **Install Backend Dependencies:**
   ```bash
   cd server  
   npm install
   ```

2. **Starting the Backend Server:**
   ```bash
   npm start
   ```
   This command starts the Node.js backend server. Ensure your backend code is configured to run on a specific port (e.g., `http://localhost:5000`) and handle API requests from the frontend.

### Accessing the Application

After starting both the frontend and backend:

- The frontend of your To-do List application will be accessible at `http://localhost:3000` in your web browser.

### Authors
- Your Name - [@hrutujamirgal](https://github.com/hrutujamirgal)

    


