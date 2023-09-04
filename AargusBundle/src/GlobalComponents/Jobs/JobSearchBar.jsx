import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="w-[100%] flex flex-col gap-5 sm:flex-row justify-between mb-10">
      <input
        type="text"
        className="w-[100%] h-[2.5rem] sm:w-[40%] outline-none border border-1 border-[#002C78] "
        placeholder="Search by Role, Keywords..."
        value={searchTerm}
        onChange={handleInputChange}
      />
   
      <button onClick={handleSearch} className=" px-5 py-2 text-white bg-[#047FCC]">Search Job</button>
    </div>
  );
}

export default SearchBar;
