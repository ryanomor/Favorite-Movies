const movies = [
  { id: 1, 
    name: "Pulp Fiction", 
    year: 1994, 
    directors: ["Quentin Tarantino"], 
    actors: ["John Travolta", "Samuel L. Jackson", "Uma Thurman"], 
    genres: ["Crime", "Drama"],
    imdb: "http://www.imdb.com/title/tt0110912/", 
    img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SY1000_CR0,0,673,1000_AL_.jpg" 
  },
  { id: 2, 
    name: "Django Unchained", 
    year: 2012, 
    directors: ["Quentin Tarantino"], 
    actors: ["Jamie Foxx", "Leonardo DiCaprio", "Samuel L. Jackson"], 
    genres: ["Drama", "Western"],
    imdb: "http://www.imdb.com/title/tt1853728/", 
    img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SY1000_CR0,0,674,1000_AL_.jpg" 
  },
  { id: 3, 
    name: "Tarzan", 
    year: 1999, 
    directors: ["Chris Buck", "Kevin Lima"], 
    actors: ["Tony Goldwyn", "Rosie O'Donnell", "Minnie Driver"], 
    genres: ["Adventure", "Romance", "Fantasy"],
    imdb: "http://www.imdb.com/title/tt0120855/", 
    img: "https://images-na.ssl-images-amazon.com/images/M/MV5BOGQwNDE0NGQtYWI4NS00ZTZiLTkwZWItYzVkM2VlZjgyZTE3XkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_.jpg"
  },
  { id: 4, 
    name: "October Sky", 
    year: 1999, 
    directors: ["Joe Johnston"], 
    actors: ["Jake Gyllenhaal", "Chris Cooper", "Laura Dern"], 
    genres: ["Drama", "Biography"],
    imdb: "http://www.imdb.com/title/tt0132477/", 
    img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTIzNTYzNjc0M15BMl5BanBnXkFtZTcwNzYzMDMyMQ@@._V1_.jpg" 
  },
  { id: 5, 
    name: "Hercules", 
    year: 1997, 
    directors: ["Ron Clements", "John Musker"], 
    actors: ["Tate Donovan", "Susan Egan", "James Woods"], 
    genres: ["Adventure", "Comedy", "Romance", "Musical", "Fantasy"],
    imdb: "http://www.imdb.com/title/tt0119282/", 
    img: "https://images-na.ssl-images-amazon.com/images/M/MV5BZDcwYjEyNWItMGI1Mi00MjI1LWIyMDEtMTQ4YjhkNjM4NDU3XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SY1000_CR0,0,674,1000_AL_.jpg" 
  },
  {
    id: 6,
    name: "The Imitation Game",
    year: 2014,
    directors: ["Morten Tyldum"],
    actors: ["Benedict Cumberbatch", "Keira Knightley", "Matthew Goode"],
    genres: ["Biography", "Drama", "History"],
    imdb: "http://www.imdb.com/title/tt2084970/",
    img: "https://images-na.ssl-images-amazon.com/images/M/MV5BOTgwMzFiMWYtZDhlNS00ODNkLWJiODAtZDVhNzgyNzJhYjQ4L2ltYWdlXkEyXkFqcGdeQXVyNzEzOTYxNTQ@._V1_SY999_CR0,0,670,999_AL_.jpg"
  },
  {
    id: 7,
    name: "Avatar",
    year: 2009,
    directors: ["James Cameron"],
    actors: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
    genres: ["Adventure", "Fantasy"],
    imdb: "http://www.imdb.com/title/tt0499549/",
    img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_.jpg"
  },
  {
    id: 8,
    name: "Troy",
    year: 2004,
    directors: ["Wolfgang Petersen"],
    actors: ["Brad Pitt", "Eric Bana", "Orlando Bloom"],
    genres: ["Drama", "History", "Romance"],
    imdb: "http://www.imdb.com/title/tt0332452/",
    img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk5MzU1MDMwMF5BMl5BanBnXkFtZTcwNjczODMzMw@@._V1_SY1000_CR0,0,677,1000_AL_.jpg"
  },
  {
    id: 9,
    name: "Independence Day",
    year: 1996,
    directors: ["Roland Emmerich"],
    actors: ["Will Smith", "Bill Pullman", "Jeff Goldblum"],
    genres: ["Action", "Adventure", "Sci-Fi"],
    imdb: "http://www.imdb.com/title/tt0116629/",
    img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMGQwNDNkMmItYWY1Yy00YTZmLWE5OTAtODU0MGZmMzQ1NDdkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
  },
  {
    id: 10,
    name: "Dunkirk",
    year: 2017,
    directors: ["Christopher Nolan"],
    actors: ["Fionn Whitehead", "Barry Keoghan", "Mark Rylance"],
    genres: ["Action", "Drama", "History"],
    imdb: "http://www.imdb.com/title/tt5013056/",
    img: "https://images-na.ssl-images-amazon.com/images/M/MV5BNDMyNWY1YzEtNjc3Yy00YmFiLWE0NjktMjQ1Y2NhZmRiMTFmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNDU3MjIxNzA@._V1_SY1000_SX675_AL_.jpg"
  },
  {
    id: 11,
    name: "Rush Hour",
    year: 1998,
    directors: ["Brett Ratner"],
    actors: ["Jackie Chan", "Chris Tucker", "Ken Leung"],
    genres: ["Action", "Comedy", "Crime"],
    imdb: "http://www.imdb.com/title/tt0120812/",
    img: "https://images-na.ssl-images-amazon.com/images/M/MV5BNDFjNzkzNGUtNTA5NC00NDY2LTkxMjUtZWI3NTlmMzA0OTBiXkEyXkFqcGdeQXVyNjg4NzYzMzA@._V1_.jpg"
  },
  {
    id: 12,
    name: "Bad Boys",
    year: 1995,
    directors: ["Michael Bay"],
    actors: ["Will Smith", "Martin Lawrence", "Lisa Boyle"],
    genres: ["Action", "Comedy", "Crime"],
    imdb: "http://www.imdb.com/title/tt0112442/",
    img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMGE1ZTQ0ZTEtZTEwZS00NWE0LTlmMDUtMTE1ZWJiZTYzZTQ2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
  },
]; 

const fetchAll = () => {
  return movies;
};

const fetchOne = movieId => {
  return movies.find(movie => movie.id.toString() === movieId);
};

const fetchGenres = () => {
  let genres = [];
  movies.forEach(movie => {
    movie.genres.forEach(genre => {
      if (genres.indexOf(genre) === -1) {
        genres.push(genre);
      };
    });
  });
  return genres.sort();
};

const fetchByGenre = (genre) => {
  let list = [];
  movies.forEach(movie => {
    if (movie.genres.indexOf(genre) !== -1) {
      list.push(movie);
    };
  });
  return list;
};

export default {
  fetchAll,
  fetchOne,
  fetchGenres,
  fetchByGenre,
};