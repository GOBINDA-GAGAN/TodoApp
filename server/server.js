import express from "express";
import dbConnection from "./config/dbConnection.js";
import dotenv from "dotenv";
import cors from "cors";
import taskRoutes from "./routes/task.route.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL;

dbConnection(DB_URL);
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use("/api/task",taskRoutes)

app.get("/test", (req, res) => {
  res.status(200).json({
    message: "welcome to TodoApp",
  });
});
app.listen(PORT, () => {
  console.log(`server run at ${PORT} 🟢`);
});
