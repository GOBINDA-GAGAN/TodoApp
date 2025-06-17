import express from "express";
import {
  createTask,
  getTask,
  showTask,
} from "../controller/task.controller.js";
const tasktaskRoutes = express.Router();

taskRoutes.post("/create-task", createTask);

taskRoutes.get("/get-all-task", getTask);
taskRoutes.get("/show-task/:id", showTask);
taskRoutes.put("/update-task/:id", showTask);
taskRoutes.delete("/delete-task/:id", createTask);
