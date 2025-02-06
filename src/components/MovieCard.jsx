import React from "react";
import "../styles/MovieCard.css";
function MovieCard() {
  const movie = { title: "Mr.robot", year: "2020" };

  function handleFavoriteClick() {}
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src="" alt={movie.title} />
        <div className="movie-overlay">
          <button className={"favorite-btn"} onClick={handleFavoriteClick}>
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.year}</p>
      </div>
    </div>
  );
}

export default MovieCard;
