import React, { useState } from "react";

const SearchBar = () => {
  const [searchData, setSearchData] = useState({
    destination: "",
    date: "",
    travelers: "2 Adults",
  });

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchData.destination || !searchData.date) {
      alert("Please fill in all required fields");
      return;
    }
    // Handle search logic here
    console.log("Searching with:", searchData);
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Where to?"
        value={searchData.destination}
        onChange={(e) =>
          setSearchData({ ...searchData, destination: e.target.value })
        }
      />
      <input
        type="date"
        value={searchData.date}
        onChange={(e) => setSearchData({ ...searchData, date: e.target.value })}
      />
      <select
        value={searchData.travelers}
        onChange={(e) =>
          setSearchData({ ...searchData, travelers: e.target.value })
        }
      >
        <option>2 Adults</option>
        <option>1 Adult</option>
        <option>3 Adults</option>
        <option>4 Adults</option>
      </select>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
