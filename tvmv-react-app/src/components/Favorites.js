import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

import up from '../assets/icons/arrow-up.svg';

import './Favorites.css';

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  scrollTop = () => {
    window.scroll({ top: 0, behavior: 'smooth' });
  };

  render() {
    JSON.parse(localStorage.getItem('favoriteMovies'));
    JSON.parse(localStorage.getItem('favoriteShows'));
    const favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies'));
    const favoriteShows = JSON.parse(localStorage.getItem('favoriteShows'));
    const addDefaultSrc = this.props.addDefaultSrc;
    return (
      <div className='favorites-container'>
        <h1>Favorited Movies</h1>
        <div className='favorite-flex'>
          {favoriteMovies.map(favorite => (
            <Link to={`/movie/${favorite.id}`}>
              <img
                src={'http://image.tmdb.org/t/p/w500' + favorite.poster_path}
                className='favorites-posters'
                alt='movie'
                onError={addDefaultSrc}
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
                className='favorites-posters'
                alt='tv'
                onError={addDefaultSrc}
              />
            </Link>
          ))}
        </div>
        <img
          src={up}
          alt='scroll back to up'
          className='scroll-back'
          onClick={this.scrollTop}
        />
      </div>
    );
  }
}

export default Favorites;
