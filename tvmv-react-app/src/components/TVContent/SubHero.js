//--------------DEPENDANCIES-------------------//
import React from 'react';
import { Link } from 'react-router-dom';
//--------------STYLES-------------------//
import './SubHero.css';
//--------------STATELESS COMPONENT-------------------//
const SubHero = ({ movie, show }) => {
  return (
    <div className='subhero-container'>
      <>
        {movie.slice(0, 1).map((movie, index) => (
          <div key={movie.id} className='subhero-movie-container'>
            <h1 className='sub-hero-title'>{movie.title}</h1>
            <p className='subhero-desc'>{movie.overview.slice(0, 300)}...</p>
            <Link to={`/movie/${movie.id}`}>
              <img
                src={'http://image.tmdb.org/t/p/original' + movie.backdrop_path}
                alt={movie.title}
                className='subhero-image-left'
              />
            </Link>
          </div>
        ))}
        {show.slice(0, 1).map((show, index) => (
          <div key={show.id} className='subhero-show-container'>
            <h1 className='sub-hero-title show-nudge align-right'>
              {show.name}
            </h1>
            <p className='subhero-desc show-nudge align-right'>
              {show.overview.slice(0, 300)}...
            </p>
            <Link to={`/television/${show.id}`}>
              <img
                src={'http://image.tmdb.org/t/p/original' + show.backdrop_path}
                alt={show.name}
                className='subhero-image-right'
              />
            </Link>
          </div>
        ))}
      </>
    </div>
  );
};

export default SubHero;
