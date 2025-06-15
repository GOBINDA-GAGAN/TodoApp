import { SlArrowLeftCircle } from "react-icons/sl";
import { Link } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";
import { RiListView } from "react-icons/ri";


const HomePage = () => {
  return (
    <div className="bg-gradient-to-r from-[#56EDD6] via-[#56EDD6] to-[#56EDD6] h-screen w-full flex items-center justify-center">
      <div className=" relative h-[600px] overflow-hidden w-[300px] border-4 flex items-center border-white bg-gradient-to-b from-[#1A2D4D] to-[#1A2D4D] flex-col justify-center rounded-2xl shadow-lg">
        <Link to="/">
          <span className="  absolute p-2 top-4 left-3 bg-white rounded-full shadow-2xl">
            <SlArrowLeftCircle size={25} />
          </span>
        </Link>
        <div className="text-center text-white p-2">
          <h1 className="text-3xl font-bold mb-2">Task Manager</h1>
          <p className="text-sm opacity-90">
            Stay organized and track your daily goals effortlessly.
          </p>
        </div>

        <div className="text-white flex items-center justify-between gap-4 p-2">
          <button className="flex gap-2 items-center cursor-pointer w-fit py-2  px-2 text-sm mt-14  font-semibold rounded-full text-center text-[#1A2D4D] bg-[#56EDD6]">
            <span className="text-sm">Add Task</span>

            <span>
              <IoMdAddCircleOutline size={20} />
            </span>
          </button>

          <Link to="/all-task">
          <button className="flex gap-2 items-center cursor-pointer w-fit py-2  px-2  text-sm mt-14  font-semibold rounded-full text-center text-[#1A2D4D] bg-[#56EDD6]">
            <span className="text-sm">View Task</span>

            <span>
              <RiListView size={20} />
            </span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
