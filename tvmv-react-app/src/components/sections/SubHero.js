//--------------DEPENDANCIES-------------------//
import React from 'react';
//--------------STYLES-------------------//
import './SubHero.css';
//--------------STATELESS COMPONENT-------------------//
const SubHero = ({ popularMovies, popularShows }) => {
  return (
    <div className='subhero-container'>
      <>
        {popularMovies.splice(1, 1).map((popularMovie, index) => (
          <div key={popularMovie.id}>
            <h1 className='sub-hero-movie-title'>{popularMovie.title}</h1>
            <p className='subhero-movie-desc'>
              {popularMovie.overview.slice(0, 300)}...
            </p>
            <img
              src={
                'http://image.tmdb.org/t/p/original' +
                popularMovie.backdrop_path
              }
              alt={popularMovie.title}
              className='subhero-image-left'
            />
          </div>
        ))}
        {popularShows.splice(3, 1).map((popularShow, index) => (
          <div key={popularShow.id} className='subhero-show-container'>
            <h1 className='sub-hero-show-title'>{popularShow.name}</h1>
            <p className='subhero-show-desc'>
              {popularShow.overview.slice(0, 300)}...
            </p>
            <img
              src={
                'http://image.tmdb.org/t/p/original' + popularShow.backdrop_path
              }
              alt={popularShow.name}
              className='subhero-image-right'
            />
          </div>
        ))}
      </>
    </div>
  );
};

export default SubHero;
