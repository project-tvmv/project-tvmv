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
          <>
            <h1 className='sub-hero-movie-title'>{popularMovie.title}</h1>
            <p className='subhero-movie-desc'>{popularMovie.overview}</p>
            <img
              src={
                'http://image.tmdb.org/t/p/original' +
                popularMovie.backdrop_path
              }
              alt={popularMovie.title}
              className='subhero-image-left'
            />
          </>
        ))}
        {popularShows.splice(3, 1).map((popularShow, index) => (
          <>
            <h1 className='sub-hero-show-title'>{popularShow.name}</h1>
            <p className='subhero-show-desc'>{popularShow.overview}</p>
            <img
              src={
                'http://image.tmdb.org/t/p/original' + popularShow.backdrop_path
              }
              alt={popularShow.name}
              className='subhero-image-right'
            />
          </>
        ))}
      </>
    </div>
  );
};

export default SubHero;
