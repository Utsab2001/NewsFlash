// SearchBar.js

import React from "react";

const SearchBar = ({ placeholder, handleInputChange, handleSearch }) => {
  return (
    <div className="flex items-center border  overflow-hidden  w-1/3 border-red-600">
      <input
        type="text"
        placeholder={placeholder}
        className="py-2 px-4 focus:outline-none w-4/5"
        onChange={handleInputChange}
      />
      <button
        onClick={handleSearch}
        className="bg-red-600 w-1/5 text-white py-2 px-4 hover:bg-red-400 focus:outline-none"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
