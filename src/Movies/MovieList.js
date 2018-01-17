import React from 'react';
import { Link } from 'react-router-dom';

<<<<<<< HEAD
const MovieList = ({ movies, genre, handleClick }) => {
=======
const MovieList = ({ movies, genre }) => {
>>>>>>> 2cbe71a91084828a65ec110843851e70e3c59363
  return (
    <div>
      <h3> Movie List: {genre}</h3>
      {movies.map((movie, idx) => 
<<<<<<< HEAD
        <li key={idx} onClick={handleClick} > 
=======
        <li key={idx}>
>>>>>>> 2cbe71a91084828a65ec110843851e70e3c59363
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