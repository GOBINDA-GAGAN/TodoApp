import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },

    status: {
      type: String,
      default:"Pending",
      enum: ["Pending", "Running", "Completed", "Failed"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("All_Todo", taskSchema);
