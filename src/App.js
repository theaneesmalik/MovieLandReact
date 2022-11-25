import { React, useEffect, useState } from "react";
import "./App.css";
// import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
const API_URL = "http://www.omdbapi.com/?apikey=4ee775e";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerms] = useState("");
  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovie(searchTerm);
  }, [searchTerm]);
  return (
    <div className="app">
      <h1>Movie Land</h1>
      <div className="search">
        <input
          placeholder="Search for Movie"
          value={searchTerm}
          onChange={(e) => setSearchTerms(e.target.value)}
        />
        {/* <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovie(searchTerm)}
        /> */}
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
