import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import MovieList from './MovieList.js';
import MoviesAPI from './MoviesAPI.js';
import Movie from './Movie.js';
import Genre from './Genre.js';
import Ratings from './Ratings.js';

class Movies extends React.Component {
  constructor() {
    super();
    this.ratings = ["★✩✩✩✩", "★★✩✩✩", "★★★✩✩", "★★★★✩", "★★★★★"];
    this.state = {
      movieRating: [],
      selectedRating: "",
      currList: [],
    };
  };

  handleSelect = (event) => {
    const movieID = event.target.id;
    const rating = event.target.value;
    let { movieRating } = this.state;
    let movie = movieRating.find(movie => movie.id === movieID);
    movie ? movie.rating = rating : movieRating.push({ id: movieID, rating }); //[...movieRating, {id: movieID, rating}]
    
    this.setState({
      movieRating,
    });
  };

  renderMovie = (props) => {
    let { genre, id } = props.match.params;
    const movie = MoviesAPI.fetchOne(id);
    const { movieRating, currList } = this.state; 
    const ratingObj = movieRating.find(movie => movie.id === id);
    const rating = ratingObj ? ratingObj.rating : "";
    if (!movie) {
      return <div>Movie was not found</div>;
    }

    return <Movie 
              movie={movie} 
              usersRating={rating} 
              genre={genre}
              ratings={this.ratings} 
              ratingList={currList}
              handleSelect={this.handleSelect} 
            />;
    // movie ? <Movie movie={movie} /> : <div> Movie was not found </div>;  
  };

  handleClick = () => {
    this.setState({
      selectedRating: "",
      currList: [],
    });
  };

  renderMovieList = () => {
    const movieList = MoviesAPI.fetchAll();
    return <MovieList movies={movieList} handleClick={this.handleClick} />
  }

  handleRating = (event) => {
    const currRating = event.target.value;
    const { movieRating } = this.state;
    const ratingArr = movieRating
      .filter(movie => movie.rating === currRating)
      .map(movie => MoviesAPI.fetchOne(movie.id));

    this.setState({
      selectedRating: currRating,
      currList: ratingArr,
    });
  };

  renderRatings = () => {
    const { movieRating, selectedRating, currList } = this.state;
    return(
      <div>
        <h3>Ratings:</h3>
        <Ratings 
          ratings={this.ratings}
          selectedRating={selectedRating} 
          userRatings={movieRating} 
          handleSelect={this.handleRating} 
        />
        <ul>
        {currList.map(movie => (
          <Link to={`/movies/list/${movie.id}`}>
            <li>{movie.name}, ({movie.year})</li>
          </Link>)
        )}
        </ul>
      </div>
    );
  };

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/movies" render={this.renderMovieList} />
          <Route exact path="/movies/genres" component={Genre} />
          <Route path="/movies/genres/:genre/:id" component={this.renderMovie} />
          <Route exact path="/movies/ratings" render={this.renderRatings} />
          <Route path="/movies/list/:id" render={this.renderMovie} />
        </Switch>
      </div>
    );
  };
};

export default Movies;