import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";

function Card(props) {
  const [hoveredMovieId, setHoveredMovieId] = useState(null);

  useEffect(() => {}, []);

  return (
    <>
      {props.movies && props.movies.length ? (
        props.movies.map((movie) => (
          <Link
            to={`/movie/${movie.id}`}
            key={movie.id}
            className="card"
            onMouseEnter={() => setHoveredMovieId(movie.id)}
            onMouseLeave={() => setHoveredMovieId(null)}
          >
            <div className="card-top">
              <h2>{movie.name}</h2>
              <p>{new Date(movie.first_air_date).getFullYear()}</p>
            </div>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.backdrop_path}`}
              alt={movie.name}
              className="back-poster"
            />
            {hoveredMovieId === movie.id && <p>{movie.vote_average} ⭐️ <span style={{fontSize: "8px"}}>{`(${movie.vote_count})`}</span></p>}
          </Link>
        ))
      ) : (
        <h2>Inga resultat</h2>
      )}
    </>
  );
}

export default Card;
