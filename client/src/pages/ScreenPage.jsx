import React from 'react'
import { Link } from 'react-router-dom'

const ScreenPage = () => {
  return (
   
      <div className="  bg-gradient-to-r from-[#56EDD6] via-[#56EDD6] to-[#56EDD6] h-screen w-full  flex items-center justify-center">
      <div className="h-[600px]  overflow-hidden w-[320px] border-4 flex items-center border-white bg-gradient-to-b from-[#1A2D4D] to-[#1A2D4D] rounded-2xl">
        <div className="text-center text-white p-2">
          <h1 class="text-3xl font-bold mb-2">Task Manager</h1>
          <p class="text-xm opacity-90">
            Stay organized and track your daily goals effortlessly.
          </p>
           <Link to="/home">
            <button className=" cursor-pointer w-fit py-2  px-5 text-sm mt-14  font-semibold rounded-full text-center text-[#1A2D4D] bg-[#56EDD6]">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
    
  )
}

export default ScreenPage
