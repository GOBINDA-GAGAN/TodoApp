import AllTask from "../models/todo.model.js";

//@ POST
export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    const newTask = new AllTask({ title, description });

    await newTask.save();

    res.status(200).json({
      status: true,
      message: "Task created",
      data: newTask,
    });
    console.log(" All ok ✅");
  } catch (error) {
    res.status(500).json({
      message: "created fall",
      error: error.message,
    });
  }
};

// @ GET
export const getTask = async (req, res) => {
  try {
    const allTask = await AllTask.find().sort({
      createdAt: -1,
    });
    res.status(200).json({
      status: true,
      message: "Task created",
      data: allTask,
    });
    console.log(" All ok ✅");
  } catch (error) {
    res.status(500).json({
      message: "created fall",
      error: error.message,
    });
  }
};
export const editTask = async (req, res) => {
  
};
export const deleteTask = async (req, res) => {};
export const showTask = async (req, res) => {};
