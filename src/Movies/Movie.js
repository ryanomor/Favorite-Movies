import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  float: "left",
  paddingRight: "2em",
  width: "40%",
};

const movieStyle = {
  textAlign: "left",
  margin: "1em",
  marginBottom: "1.5em",
};

const Movie = ({ movie, ratings, handleSelect, usersRating, genre, ratingList }) => {
  const numberRating = ratings.indexOf(usersRating) + 1;
  return (
    <div style={movieStyle}>
      <h3>{movie.name}, {movie.year}</h3>
      <img style={styles} src={movie.img} />
      <p> Actors: {movie.actors.join(", ")}</p>
      {movie.directors.length > 1 
        ? <p>Directors: {movie.directors.join(", ")}</p> 
        : <p>Director: {movie.directors.join("")}</p>}
      {movie.genres.length > 1 
        ? <p>Genres: {movie.genres.join(", ")}</p>
        : <p>Genre: {movie.genres.join("")}</p>}
      <p><a href={movie.imdb}>{movie.name}'s IMDB</a></p>
      <p>Rate {movie.name}:{" "}
        <select id={movie.id} value={usersRating} onChange={handleSelect}>
          {["", ...ratings].map((rating, idx) => 
            <option key={idx} value={rating}>{rating}</option>
          )}
        </select>
      </p>
      {usersRating ? <p>You rated {movie.name} {numberRating} out of 5 stars</p> : usersRating}
      {genre 
        ? <Link to='/movies/genres'>Back</Link> 
        : ratingList.length > 0 
          ? <Link to='/movies/ratings'>Back</Link>
          : <Link to='/movies'>Back</Link>}
      <div style={{clear: "left"}}></div>
    </div>
  );
};

export default Movie;