import React, { lazy, use, useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import "../styles/Home.css";
import {
  getPopularMovies,
  searchMovies,
  getMovieDirector,
} from "../services/api";
import { useMovieContext } from "../context/movieContext";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadMoviesWithDirector = async (fetchMoviesFunction) => {
    try {
      const fetchedMovies = await fetchMoviesFunction();
      const moviesWithDirector = await Promise.all(
        fetchedMovies.map(async (movie) => {
          const directorData = await getMovieDirector(movie.id);
          return {
            ...movie,
            director: directorData ? directorData.name : "No director info.",
          };
        })
      );
      setMovies(moviesWithDirector);
    } catch (err) {
      console.error(err);
      setError("Failed to load movies...");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMoviesWithDirector(getPopularMovies);
  }, []);

  async function handleSearch(e) {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      await loadMoviesWithDirector(() => searchMovies(searchQuery));
      setError(null);
    } catch (err) {
      setError("Failed to load search results.");
    } finally {
      setLoading(false);
    }
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
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
