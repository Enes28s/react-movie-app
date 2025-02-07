import React from "react";
import "../styles/MovieCard.css";
import { useMovieContext } from "../context/movieContext";
import { Check, Clock } from "lucide-react";
import nosignal from "../assets/nosignal.jpg";

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
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : nosignal
          }
          alt={movie.title}
        />
        <div className="movie-overlay">
          <div className="overlay-buttons">
            <button
              className={`favorite-btn ${favorite ? "active" : ""}`}
              onClick={onFavoriteClick}
            >
              <Clock />
            </button>
            <button
              className={`watched-btn ${watched ? "active" : ""}`}
              onClick={onWatchedClick}
            >
              <Check />
            </button>
          </div>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <h3>{movie.director}</h3>
        <p>{movie.release_date ? movie.release_date?.split("-")[0] : "2012"}</p>
      </div>
    </div>
  );
}

export default MovieCard;
