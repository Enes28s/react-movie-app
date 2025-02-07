import React from "react";
import { useMovieContext } from "../context/movieContext";
import MovieCard from "../components/MovieCard";
import "../styles/Watchlater.css";

function WatchLater() {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className="watchlater">
        <h2>Watch Later</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="watchlater-empty">
      <h2>No Favorite Movies Yet</h2>
      <p>Start adding movies to your favorites and they will appear here!</p>
    </div>
  );
}

export default WatchLater;
