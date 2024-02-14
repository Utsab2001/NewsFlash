import React,{Component} from 'react'
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="font-bold  h-[60px] border border-red-400 flex justify-between items-center ">
        <h2 className="left text-2xl pl-10">
          News<span className="text-red-600">Flash</span>
        </h2>
          <div className="right cursor-pointer hidden gap-3 md:flex pr-10">
            <a
               href="/home"
              className=" text-black hover:text-gray-700 hover:underline transition duration-300"
            >
              Home
            </a>
            <a
               href="/business"
              className=" text-gray-950 hover:text-gray-700 hover:underline transition duration-300"
            >
              Business
            </a>
            <a
               href="/sports"
              className=" text-gray-950 hover:text-gray-700 hover:underline transition duration-300"
            >
              Sports
            </a>
            <a
               href="/science"
              className=" text-gray-950 hover:text-gray-700 hover:underline transition duration-300"
            >
              Science
            </a>
            <a
               href="/technology"
              className=" text-gray-950 hover:text-gray-700 hover:underline transition duration-300"
            >
              Technology
            </a>
            <a
               href="/politics"
              className=" text-gray-950 hover:text-gray-700 hover:underline transition duration-300"
            >
              Politics
            </a>
            <a
               href="/entertainment"
              className=" text-gray-950 hover:text-gray-700 hover:underline transition duration-300"
            >
              Entertainment
            </a>
            <a
               href="/health"
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