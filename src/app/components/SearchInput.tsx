"use client"

import { useState } from "react";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
<div className="relative">
    <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
        className="text-gray-400 px-4 py-2 pl-8 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <svg className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-6a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
</div>
  );
};

const App = () => {
  return (
    <div className="flex justify-center items-center ">
      <SearchInput />
    </div>
  );
};

export default App;