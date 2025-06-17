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

//@GET
export const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);

    const taskData = await AllTask.findById(id);

    res.status(200).json({
      status: true,
      data: taskData,
    });
    console.log(" All ok ✅");
  } catch (error) {
    res.status(500).json({
      message: "created fall",
      error: error.message,
    });
  }
};

//@PUT
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;
    const taskData = await AllTask.findByIdAndUpdate(
      id,
      {
        title,
        description,
        status,
      },
      {
        new: true,
      }
    ).sort({
      createdAt: -1,
    });

    res.status(200).json({
      status: true,
      message: "Task Updated",
      data: taskData,
    });
    console.log(" All ok ✅");
  } catch (error) {
    res.status(500).json({
      message: "update failed",
      error: error.message,
    });
  }
};

//@Delete
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteTaskData = await AllTask.findByIdAndDelete(id);
    if (!deleteTaskData) {
      return res.status(404).json({
        status: false,
        message: "Task not found",
        data: null,
      });
    }

    res.status(200).json({
      status: true,
      message: "Task delete",
      data: deleteTaskData,
    });
    console.log(" All ok ✅");
  } catch (error) {
    res.status(500).json({
      message: "deleted successful",
      error: error.message,
    });
  }
};
