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
          <img
            src={
              'http://image.tmdb.org/t/p/original' + popularMovie.backdrop_path
            }
            alt={popularMovie.title}
            className='subhero-image-left'
          />
        ))}
      </>
    </div>
  );
};

export default SubHero;
