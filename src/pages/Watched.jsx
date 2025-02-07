import React from "react";
import { useMovieContext } from "../context/movieContext";
import "../styles/Watched.css";
import MovieCard from "../components/MovieCard";

function Watched() {
  const { watched } = useMovieContext();
  function handleClick() {
    console.log("asdaskdj");
  }
  if (watched) {
    return (
      <div className="watched">
        <h2>Your Wacthed Movies</h2>
        <div className="movies-grid">
          {watched.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="watched-empty">
      <h2>No Favorite Movies Yet</h2>
      <p>Start adding movies to your favorites and they will appear here!</p>
    </div>
  );
}

export default Watched;
