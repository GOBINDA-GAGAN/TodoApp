import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { RiListView } from "react-icons/ri";
import { SlArrowLeftCircle } from "react-icons/sl";
import { Link } from "react-router-dom";
import TaskItem from "../components/TaskItem";

const TaskList = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-r from-[#56EDD6] via-[#56EDD6] to-[#56EDD6] flex items-center justify-center">
      <div className="relative h-[600px] w-[320px] border-4 border-white bg-gradient-to-b from-[#1A2D4D] to-[#1A2D4D] rounded-2xl shadow-lg flex flex-col items-center p-4 gap-4">
        {/* Back Button */}
        <Link
          to="/"
          className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-xl"
        >
          <SlArrowLeftCircle size={25} className="text-[#1A2D4D]" />
        </Link>

        {/* Header */}
        <div className="mt-8 text-center text-white">
          <h1 className="text-2xl font-bold">Task Manager</h1>
          <p className="text-sm opacity-80">
            Stay organized and track your daily goals effortlessly.
          </p>
        </div>

        <div className="flex-1 w-full mt-1 overflow-y-auto text-white px-2">
          <div className="text-center text-white opacity-100 italic custom-scrollbar">
            {new Array(5).fill(20).map((item,index) => {
              return <TaskItem item={item} _id={index}></TaskItem>;
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-auto pb-2">
          <Link to="/home">
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full bg-[#56EDD6] text-[#1A2D4D] hover:bg-[#4ad4bd]">
              <span>Add Task</span>
              <IoMdAddCircleOutline size={20} />
            </button>
          </Link>

          <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full bg-[#56EDD6] text-[#1A2D4D] hover:bg-[#4ad4bd]">
            <span>View Task</span>
            <RiListView size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
