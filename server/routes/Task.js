const { Router } = require("express");

const { createTask, editTask, reorderTasks } = require("../controllers/Task");

const TaskRouter = Router();

TaskRouter.post("/", createTask);
TaskRouter.put("/:id", editTask);
TaskRouter.put("/", reorderTasks);

module.exports = TaskRouter;
