import React from "react";
import { FaEdit } from "react-icons/fa";
import { SlArrowLeftCircle } from "react-icons/sl";
import { Link } from "react-router-dom";

const ShowTask = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-r from-[#56EDD6] via-[#56EDD6] to-[#56EDD6] flex items-center justify-center">
      <div className="relative h-[600px] w-[320px] border-4 border-white bg-gradient-to-b from-[#1A2D4D] to-[#1A2D4D] rounded-2xl shadow-lg flex flex-col items-center justify-start p-4 gap-4">
        <Link
          to="/"
          className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-xl"
        >
          <SlArrowLeftCircle size={25} className="text-[#1A2D4D]" />
        </Link>

        <div className="mt-8 text-center text-white">
          <h1 className="text-2xl font-bold">Task Manager</h1>
          <p className="text-sm opacity-80">
            Add your tasks and manage them easily.
          </p>
        </div>

        <div className="w-full px-2 mt-6 text-white">
          <label className="block text-left text-sm mb-1">Task Title</label>
          <input
            type="text"
            placeholder="Enter your task"
            className="w-full p-2 bg-transparent border border-white rounded-md outline-none placeholder:text-white/70"
          />

          <label className="block text-left text-sm mt-4 mb-1">
            Task Description
          </label>
          <textarea
            placeholder="Enter task description"
            className="w-full p-2 h-24 bg-transparent border border-white rounded-md outline-none placeholder:text-white/70 resize-none"
          ></textarea>
          <label className="block text-left text-sm mt-1 mb-1">Status</label>
          <select
            placeholder="Enter task description"
            className="w-full p-1 bg-transparent border border-white rounded-md outline-none placeholder:text-white/70 resize-none"
          >
            <optgroup className="text-black">
              <option value="pending">Pending</option>
              <option value="running">Running</option>
              <option value="completed">Completed</option>
              <option value="failed">Failed</option>
            </optgroup>
          </select>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full bg-[#56EDD6] text-[#1A2D4D] hover:bg-[#4ad4bd]">
          <span>Update</span>
          <FaEdit size={20} />
        </button>
      </div>
    </div>
  );
};

export default ShowTask;
