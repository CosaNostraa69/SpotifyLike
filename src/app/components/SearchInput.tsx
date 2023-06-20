"use client"

import { useState } from "react";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search"
      value={searchTerm}
      onChange={handleChange}
      className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <SearchInput />
    </div>
  );
};

export default App;