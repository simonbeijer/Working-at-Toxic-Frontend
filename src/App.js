import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import data from "./data.json";
import Card from "./Card.js";
import Movie from "./Movie.js";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [movies, setMovies] = useState(data.results);
  useEffect(() => {
    const sortedMovies = [...data.results].sort((a, b) => new Date(b.first_air_date) - new Date(a.first_air_date));
    if (searchInput) {
      const filteredMovies = sortedMovies.filter(
        (movie) =>
          movie.name.toLowerCase().includes(searchInput.toLowerCase()) ||
          movie.original_language.toLowerCase().includes(searchInput.toLowerCase())
      );
      setMovies(filteredMovies);
    } else {
      setMovies(sortedMovies);
    }
  }, [searchInput]);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/" style={{textDecoration: "none", color: "#eeeeee"}}>
          <h1>COUCH TUNER 📺 </h1>
          </Link>
          <div className="input-div">
            <label htmlFor="searchInput">Search</label>
            <input
              type="text"
              name="searchInput"
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
            />
          </div>
        </header>
        <main className="App-main">
          <Routes>
            <Route path="/" element={<Card movies={movies} />} />
            <Route path="/movie/:id" element={<Movie movies={data.results} />} />
          </Routes>
        </main>
        <footer className="App-footer"></footer>
      </div>
    </Router>
  );
}

export default App;
