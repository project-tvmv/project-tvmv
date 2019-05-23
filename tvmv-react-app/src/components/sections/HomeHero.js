//--------------DEPENDANCIES-------------------//
import React from 'react';
import { NavLink } from 'react-router-dom';
//--------------STYLES-------------------//
import './HomeHero.css';
//--------------STATELESS COMPONENT-------------------//
const HomeHero = ({ popularMovies, popularShows }) => {
  return (
    <div className='home-hero'>
      <div className='home-hero-movie'>
        {popularMovies.slice(0, 1).map((popularMovie, index) => (
          <div key={popularMovie.id}>
            <div className='hero-movie-info'>
              <h1 className='hero-movie-title'>{popularMovie.title}</h1>
              <p className='hero-movie-desc'>
                {popularMovie.overview.slice(0, 300)}...
              </p>
            </div>
            <NavLink to={`/movies/${popularMovie.id}`}>
              <img
                src={
                  'http://image.tmdb.org/t/p/original' +
                  popularMovie.backdrop_path
                }
                alt={popularMovie.title}
                className='hero-image'
              />
            </NavLink>
          </div>
        ))}
      </div>
      <div className='home-hero-tv'>
        {popularShows.slice(0, 1).map((popularShow, index) => (
          <div key={popularShow.id}>
            <div className='hero-show-info'>
              <h1 className='hero-show-title'>{popularShow.name}</h1>
              <p className='hero-show-desc'>
                {popularShow.overview.slice(0, 300)}...
              </p>
            </div>
            <NavLink to={`/television/${popularShow.id}`}>
              <img
                src={
                  popularShow.name === 'Game of Thrones'
                    ? 'https://i.ibb.co/GHMp88p/cq5dam-web-1200-675.jpg'
                    : 'http://image.tmdb.org/t/p/original' +
                      popularShow.backdrop_path
                }
                alt={popularShow.name}
                className='hero-image'
              />
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeHero;
