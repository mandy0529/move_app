import React from 'react';
import axios from 'axios';
import Movie from './movies';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: {movies},
      },
    } = await axios.get(
      'https://yts.mx/api/v2/list_movies.json?sort_by=rating'
    );
    this.setState({movies, isLoading: false});
    console.log(movies, 'movies');
  };

  componentDidMount() {
    this.getMovies();
  }
  render() {
    const {isLoading, movies} = this.state;
    return (
      <div>
        {isLoading
          ? 'Loading'
          : movies.map((movie) => {
              console.log(movie, 'movie');
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  year={movie.year}
                  rating={movie.rating}
                  summary={movie.summary}
                  poster={movie.small_cover_image}
                />
              );
            })}
      </div>
    );
  }
}

export default App;
