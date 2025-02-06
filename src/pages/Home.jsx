import React, { useState } from "react";
import MovieCard from "../components/MovieCard";
import "../styles/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  function handleSearch(e) {
    e.preventDefault();
  }
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
}

export default Home;
