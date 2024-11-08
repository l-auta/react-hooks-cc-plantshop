import React from "react";

function Search({ onSearchChange }) {
  // Handle search input change
  const handleSearch = (e) => {
    onSearchChange(e.target.value); // Pass the search query to the parent component
  };

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearch} // Trigger filtering on input change
      />

    </div>
  );
}

export default Search;

