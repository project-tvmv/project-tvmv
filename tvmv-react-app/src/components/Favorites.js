import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

import './Favorites.css';

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    JSON.parse(localStorage.getItem('favoriteMovies'));
    JSON.parse(localStorage.getItem('favoriteShows'));
    const favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies'));
    const favoriteShows = JSON.parse(localStorage.getItem('favoriteShows'));
    return (
      <div className='favorites-container'>
        <h1>Favorited Movies</h1>
        <div className='favorite-flex'>
          {favoriteMovies.map(favorite => (
            <Link to={`/movie/${favorite.id}`}>
              <img
                src={'http://image.tmdb.org/t/p/w500' + favorite.poster_path}
                className='posters'
                alt='movie'
              />
            </Link>
          ))}
        </div>
        <h1>Favorited Shows</h1>
        <div className='favorite-flex'>
          {favoriteShows.map(favorite => (
            <Link to={`/tv/${favorite.id}`}>
              <img
                src={'http://image.tmdb.org/t/p/w500' + favorite.poster_path}
                className='posters'
                alt='tv'
              />
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Favorites;
