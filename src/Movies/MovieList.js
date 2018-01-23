import React from 'react';
import { Link } from 'react-router-dom';

const imgStyle = {
  width: "20%", 
  float: "left", 
  paddingRight: "0.5em",
};

const MovieList = ({ movies, genre, handleClick }) => {
  return (
    <div>
      <h3> Movie List: {genre}</h3>
      {movies.map((movie, idx) => 
        <li className="liStyle" key={idx} onClick={handleClick} > 
          {genre 
            ? <Link to={`/movies/genres/${genre.toLowerCase()}/${movie.id}`}>
                <img style={imgStyle} src={movie.img} /> {" "}
                  {movie.name}, ({movie.year})
                <div style={{ clear: "left" }}></div>
              </Link> 
            : <Link to={`/movies/list/${movie.id}`}>
                <img style={imgStyle} src={movie.img} /> {" "}
                  {movie.name}, ({movie.year})
                <div style={{clear: "left"}}></div>
              </Link>
            }
        </li>
      )}
    </div>
  );
};

export default MovieList;