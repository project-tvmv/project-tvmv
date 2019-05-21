//--------------DEPENDANCIES-------------------//
import React from 'react';
//--------------STYLES-------------------//
import './HomeHero.css';
//--------------STATELESS COMPONENT-------------------//
const HomeHero = ({ popularMovies, popularShows }) => {
  return (
    <div className='home-hero'>
      <div className='home-hero-movie'>
        {popularMovies.slice(0, 1).map((popularMovie, index) => (
          <>
            <h1 className='hero-movie-title'>{popularMovie.title}</h1>
            <p className='hero-movie-desc'>{popularMovie.overview}</p>
            <img
              src={
                'http://image.tmdb.org/t/p/original' +
                popularMovie.backdrop_path
              }
              alt={popularMovie.title}
              className='hero-image'
            />
          </>
        ))}
      </div>
      <div className='home-hero-tv'>
        {popularShows.slice(0, 1).map((popularShow, index) => (
          <>
            <h1 className='hero-show-title'>{popularShow.name}</h1>
            <p className='hero-show-desc'>{popularShow.overview}</p>
            <img
              src={
                'http://image.tmdb.org/t/p/original' + popularShow.backdrop_path
              }
              alt={popularShow.name}
              className='hero-image'
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default HomeHero;
