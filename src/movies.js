import React from 'react';
import PropTypes from 'prop-types';

function Movie({title, year, rating, summary, poster}) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{year}</p>
      <p> ⭐️ {rating}</p>
      <p>{summary}</p>
      <img src={poster}></img>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
