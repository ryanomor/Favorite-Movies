import React from 'react';
import { render } from 'react-dom';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './Home.js';
import Movies from './Movies/Movies.js';

const styles = {
  fontFamily: 'sans-serif',
  marginTop: "1em",
  paddingBottom: "1em",
};

const navBar = {
  backgroundColor: "#91AAB4",
  textAlign: "center",
  fontSize: "18px", 
  paddingTop: "1em",
  paddingBottom: "1em",
  borderRadius: "0.25em 0.25em 0 0",
};

const App = () => (
  <div style={styles}>
    <nav style={navBar}>
      <Link className="links" to="/">Home</Link> 
      {" "}
      <Link className="links" to="/movies">Movies</Link>
      {" "}
      <Link className="links" to="/movies/genres">Genres</Link>
      {" "}
      <Link className="links" to="/movies/ratings">Ratings</Link>
    </nav>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/movies" component={Movies} />
    </Switch>
  </div>
);

export default App;