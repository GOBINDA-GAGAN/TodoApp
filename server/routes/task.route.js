import express from "express";
import {
  createTask,
  deleteTask,
 updateTask,
  getTask,
  getTaskById,
} from "../controller/task.controller.js";
const taskRoutes = express.Router();

taskRoutes.post("/create-task", createTask); // 🟢

taskRoutes.get("/get-all-task", getTask);  // 🟢

taskRoutes.get("/show-task/:id", getTaskById); // 🟢

taskRoutes.put("/update-task/:id", updateTask);


taskRoutes.delete("/delete-task/:id", deleteTask);

export  default taskRoutes;
