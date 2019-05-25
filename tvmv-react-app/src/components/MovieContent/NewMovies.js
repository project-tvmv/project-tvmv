//--------------DEPENDANCIES-------------------//
import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';
//--------------STYLES-------------------//
import '../../App.css';
//--------------STATELESS COMPONENT-------------------//
const NewMovies = ({ newMovies }) => {
  return (
    <div className='new-movies-container'>
      <div className='section'>
        <h1 className='section-header'>New to Movies</h1>
      </div>
      <div className='six-poster-container'>
        {newMovies.slice(0, 8).map((newMovie, index) => (
          <div key={newMovie.id}>
            <Link to={`/movie/${newMovie.id}`}>
              <Tilt
                className='Tilt'
                options={{ max: 12, scale: 1.05, perspective: 500 }}
              >
                <img
                  src={'http://image.tmdb.org/t/p/w500' + newMovie.poster_path}
                  alt={newMovie.title}
                  className='posters'
                />
              </Tilt>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewMovies;
