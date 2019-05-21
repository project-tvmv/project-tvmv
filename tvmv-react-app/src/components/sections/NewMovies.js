//--------------DEPENDANCIES-------------------//
import React from 'react';
//--------------STYLES-------------------//
import './NewMovies.css';
import '../../App.css';
//--------------STATELESS COMPONENT-------------------//
const NewMovies = ({ newMovies }) => {
  return (
    <div className='new-movies-container'>
      <div className='section'>
        <h1 className='section-header'>New to Movies</h1>
        <p className='seemore'>see more</p>
      </div>
      <div className='six-poster-container'>
        {newMovies.slice(0, 6).map((newMovie, index) => (
          <img
            src={'http://image.tmdb.org/t/p/original' + newMovie.poster_path}
            alt={newMovie.title}
            className='posters'
          />
        ))}
      </div>
    </div>
  );
};

export default NewMovies;
