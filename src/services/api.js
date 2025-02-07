const API_KEY = "7b6a9e51b8f943d3196812134999bf54";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};

export const getMovieDirector = async (movieId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error("Network error");
    }
    const data = await response.json();

    const director = data.crew.find((member) => member.job === "Director");
    return director;
  } catch (error) {
    console.error("Director fetch error", error);
    return null;
  }
};
