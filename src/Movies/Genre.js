import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import MoviesAPI from './MoviesAPI.js';
import Movie from './Movie.js';
import MovieList from './MovieList.js';

class Genre extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedGenre: "",
    };
  };

  handleChange = (event) => {
    const genre = event.target.value;
    this.setState({
      selectedGenre: genre,
    });
  }; 

  render() {

    // const { selectedGenre } = this.state;
    // {selectedGenre ? <Redirect to={`/movies/genres/${selectedGenre.toLowerCase()}`} /> : selectedGenre}
    const { selectedGenre } = this.state;
    const genres = MoviesAPI.fetchGenres();
    const moviesByGenre = MoviesAPI.fetchByGenre(selectedGenre);
    return (
      <div>
        <h3>Genres:</h3>
        <span>See a list of movies in a selected genre: </span> {" "}
        <select value={selectedGenre} onChange={this.handleChange}>
          {["", ...genres].map((genre, idx) =>
            <option key={idx} value={genre}>{genre}</option>
          )}
        </select>

        {selectedGenre ? <MovieList movies={moviesByGenre} genre={selectedGenre} /> : selectedGenre}

      </div>
    );
  };
};

export default Genre;