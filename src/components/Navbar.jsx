import React,{useState} from 'react'
import { Link } from "react-router-dom";

const Navbar = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="font-bold  h-[60px] border border-red-400 flex  justify-between items-center ">
        <h2 className="left text-2xl pl-10">
          News<span className="text-red-600">Flash</span>
        </h2>
        <div className="relative md:hidden">
          {/* Dropdown button */}
          <button
            className="inline-flex font-bold items-center justify-center w-full px-4 py-2 text-xs sm:text-sm text-gray-800  bg-white border-none rounded-md hover:bg-gray-50 focus:outline-none "
            onClick={() => setIsOpen(!isOpen)}
          >
            Categories
            {/* Dropdown arrow */}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {/* Dropdown items */}
          {isOpen && (
            <div className="absolute flex flex-col items-left gap-3 p-5 z-50 right-0 w-48 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {/* {items.map((item, index) => (
                <div key={index} className="px-4 py-2 text-sm text-gray-700">
                  {item}
                </div>
              ))} */}
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
          )}
        </div>
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
};

export default Navbar