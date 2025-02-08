import React, { useState } from "react";
import { useMovieContext } from "../context/movieContext";
import "../styles/Watched.css";
import MovieCard from "../components/MovieCard";
import { Plus, Minus } from "lucide-react";

function Watched() {
  const { watched } = useMovieContext();

  if (!watched || watched.length === 0) {
    return (
      <div className="watched-empty">
        <h2>No Watched Movies Yet</h2>
        <p>Start watching movies and track them here!</p>
      </div>
    );
  }

  const categorizedMovies = watched.reduce((acc, movie) => {
    const year = movie.watchDate.split(".")[2];
    if (!acc[year]) acc[year] = [];
    acc[year].push(movie);
    return acc;
  }, {});

  const sortedYears = Object.keys(categorizedMovies).sort((a, b) => b - a);

  return (
    <div className="watched">
      <h2>Your Watched Movies</h2>

      {sortedYears.map((year) => (
        <div key={year} className="year-category">
          <h3 className="year-title">{year}</h3>
          <div className="movies-grid">
            {categorizedMovies[year]
              .sort(
                (a, b) =>
                  new Date(b.watchDate.split(".").reverse().join("-")) -
                  new Date(a.watchDate.split(".").reverse().join("-"))
              )
              .map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Watched;
