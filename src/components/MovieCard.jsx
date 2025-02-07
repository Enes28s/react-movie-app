import React from "react";
import "../styles/MovieCard.css";
import { useMovieContext } from "../context/movieContext";

function MovieCard({ movie }) {
  const {
    isFavorite,
    addToFavorites,
    removeFromFavorites,
    isWatched,
    addToWatched,
    removeFromWatched,
  } = useMovieContext();

  const favorite = isFavorite(movie.id);
  const watched = isWatched(movie.id);

  function onFavoriteClick(e) {
    e.preventDefault();
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  }

  function onWatchedClick(e) {
    e.preventDefault();
    if (watched) removeFromWatched(movie.id);
    else addToWatched(movie);
  }
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <div className="overlay-buttons">
            <button
              className={`favorite-btn ${favorite ? "active" : ""}`}
              onClick={onFavoriteClick}
            >
              🕓
            </button>
            <button
              className={`favorite-btn ${watched ? "active" : ""}`}
              onClick={onWatchedClick}
            >
              ✔
            </button>
          </div>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
