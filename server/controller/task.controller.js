//@ POST
export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    console.log(title, description);
  } catch (error) {
    res.status(400).json({
      message: "created fall",
      error: error.message,
    });
  }
};

export const getTask = async (req, res) => {};
export const editTask = async (req, res) => {};
export const deleteTask = async (req, res) => {};
export const showTask = async (req, res) => {};
