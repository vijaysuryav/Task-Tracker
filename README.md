# Task-Tracker

Inspired by [roadmap.sh's Task Tracker project](https://roadmap.sh/projects/task-tracker).

## Task Tracker CLI

This is a simple command-line interface (CLI) tool for managing tasks. The tasks are stored in a `task.json` file in the current directory. Each task has an ID, description, status, created date, and updated date.

### Features

- **Add Task**: Add a new task with a description.
- **Update Task**: Update the description of an existing task by ID.
- **Delete Task**: Delete a task by its ID.
- **Mark Task as In-Progress**: Mark a task as "in-progress" by its ID.
- **Mark Task as Completed**: Mark a task as "completed" by its ID.
- **List Tasks**: List all tasks, or filter tasks by status (`toDo`, `in-progress`, `completed`).

### Task Properties

Each task includes the following properties:

- `id`: A unique identifier.
- `description`: A short description of the task.
- `status`: The task's current status (`toDo`, `in-progress`, `completed`).
- `createdAt`: The date and time the task was created.
- `updatedAt`: The date and time the task was last updated.

## Setup

Ensure Node.js is installed on your system.

1. Clone or download this project.
2. Place `task_tracker.js` in your project directory.
3. Run the commands using Node.js.

## Usage

The CLI accepts the following commands:

### Add a Task

node task_tracker.js add "task description"

### update a Task 
node task_tracker.js update <taskID> "new task description"

### Delete a Task
node task_tracker.js delete <taskID>

### Mark Task as In-Progress
node task_tracker.js mark-in-progress <taskID>

### Mark Task as Completed
node task_tracker.js mark-completed <taskID>
Example: node task_tracker.js mark-completed 2
### List Tasks

node task_tracker.js list


### To filter tasks by status:

node task_tracker.js list <status>