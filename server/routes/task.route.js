import express from "express";
import {
  createTask,
  deleteTask,
  editTask,
  getTask,
  showTask,
} from "../controller/task.controller.js";
const taskRoutes = express.Router();

taskRoutes.post("/create-task", createTask); // 🟢

taskRoutes.get("/get-all-task", getTask); 
taskRoutes.get("/show-task/:id", showTask);
taskRoutes.put("/update-task/:id", editTask);
taskRoutes.delete("/delete-task/:id", deleteTask);

export  default taskRoutes;
