import React from 'react';
import { render } from 'react-dom';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './Home.js';
import Movies from './Movies/Movies.js';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'left',
};

const App = () => (
  <div style={styles}>
    <nav>
      <Link to="/">Home</Link> 
      {" "}
      <Link to="/movies">Movies</Link>
      {" "}
      <Link to="/movies/genres">Genres</Link>
      {" "}
      <Link to="/movies/ratings">Ratings</Link>
    </nav>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/movies" component={Movies} />
    </Switch>
  </div>
);

export default App;