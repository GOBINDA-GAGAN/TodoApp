import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const TaskItem = ({
  title = "ai/ml",
  _id,
  description = "Lorem ipsum dolor sit amet,  elit. Consequuntur, distinctio!",
  status = "Pending",
}) => {
  const isCompleted = status === "Completed";

  return (
    <div className="bg-white/10 border flex flex-col border-white/30 rounded-lg p-3 mb-3 text-white shadow-sm">
      {/* Top Row: Title + Status */}
      <div className="flex justify-between items-center mb-1">
        <h2 className="text-lg font-semibold">{title}</h2>
        <span
          className={`text-xs font-medium px-2 py-1 rounded-full ${
            isCompleted
              ? "bg-green-500/20 text-green-400"
              : "bg-yellow-500/20 text-yellow-500"
          }`}
        >
          {status}
        </span>
      </div>

      {/* Description */}
      <p className="text-[16px]  text-start  break-words max-w-full opacity-80">{description}</p>

      {/* Buttons */}
      <div className="flex justify-end gap-2 mt-2">
        <button className="hover:text-red-400" title="Delete">
          <FaTrash size={14} />
        </button>
        <Link to={`/showTask/${_id}`}>
        <button className="hover:text-yellow-400" title="Edit">
          <FaEdit size={14} />
        </button>
        
        </Link>
      </div>
    </div>
  );
};

export default TaskItem;
