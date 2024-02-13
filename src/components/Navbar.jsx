import React,{Component} from 'react'
// import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="font-bold  h-[70px] border border-red-400 flex justify-between items-center ">
        <h2 className="left text-2xl pl-10">
          News<span className="text-red-600">Flash</span>
        </h2>
          <div className="right cursor-pointer hidden gap-3 md:flex pr-10">
            <a
              to="/general"
              className=" text-black hover:text-gray-700 hover:underline transition duration-300"
            >
              Home
            </a>
            <a
              to="/business"
              className=" text-gray-950 hover:text-gray-700 hover:underline transition duration-300"
            >
              Business
            </a>
            <a
              to="/sports"
              className=" text-gray-950 hover:text-gray-700 hover:underline transition duration-300"
            >
              Sports
            </a>
            <a
              to="/science"
              className=" text-gray-950 hover:text-gray-700 hover:underline transition duration-300"
            >
              Science
            </a>
            <a
              to="/technology"
              className=" text-gray-950 hover:text-gray-700 hover:underline transition duration-300"
            >
              Technology
            </a>
            <a
              to="/politics"
              className=" text-gray-950 hover:text-gray-700 hover:underline transition duration-300"
            >
              Politics
            </a>
            <a
              to="/entertainment"
              className=" text-gray-950 hover:text-gray-700 hover:underline transition duration-300"
            >
              Entertainment
            </a>
            <a
              to="/health"
              className=" text-gray-950 hover:text-gray-700 hover:underline transition duration-300"
            >
              Health
            </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar