//--------------DEPENDANCIES-------------------//
import React from 'react';
//--------------STYLES-------------------//
import '../../App.css';
//--------------STATELESS COMPONENT-------------------//
const PopularMovies = ({ popularMovies }) => {
  return (
    <div className='popular-movies-container'>
      <div className='section'>
        <h1 className='section-header'>Popular Movies</h1>
        <p className='seemore'>see more</p>
      </div>
      <div className='six-poster-container'>
        <>
          {popularMovies.splice(0, 6).map((popularMovie, index) => (
            <img
              src={
                'http://image.tmdb.org/t/p/original' + popularMovie.poster_path
              }
              alt={popularMovie.title}
              className='posters'
            />
          ))}
        </>
      </div>
    </div>
  );
};

export default PopularMovies;
