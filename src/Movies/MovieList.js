import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies, genre }) => {
  return (
    <div>
      <h3> Movie List: {genre}</h3>
      {movies.map((movie, idx) => 
        <li key={idx}>
          {genre 
            ? <Link to={`/movies/genres/${genre.toLowerCase()}/${movie.id}`}>
                {movie.name}, ({movie.year})
              </Link>
            : <Link to={`/movies/list/${movie.id}`}>
                {movie.name}, ({movie.year})
            </Link>}
        </li>
      )}
    </div>
  );
};

export default MovieList;