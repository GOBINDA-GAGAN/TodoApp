import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
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

export default mongoose.model("AllTask", taskSchema);
