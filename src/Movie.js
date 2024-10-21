import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Movie(props) {
  const { id } = useParams();
  const [selectedMovie, setSelectedMovie] = useState(0);

  useEffect(() => {
    const movie = props.movies.find((movie) => movie.id === Number(id));
    setSelectedMovie(movie);
  }, [id, props.movies]);

  return (
    <div>
      <h1 className="movie-title">{selectedMovie.name}</h1>
          <p className="movie-info" style={{paddingBottom: "10px"}}>
            <strong>Overview:</strong> {selectedMovie.overview}
          </p>
          <p className="movie-info">
            <strong>Language:</strong> {selectedMovie.original_language}
          </p>
          <p className="movie-info">
            <strong>First Air Date:</strong> {selectedMovie.first_air_date}
          </p>
          <p className="movie-info">
            <strong>Vote Average:</strong> {selectedMovie.vote_average}
          </p>
          <p className="movie-info">
            <strong>Vote Count:</strong> {selectedMovie.vote_count}
          </p>
          <img
            src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
            alt={selectedMovie.name}
            className="movie-poster"
          />
    </div>
  );
}
export default Movie;
