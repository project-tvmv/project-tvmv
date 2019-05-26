//--------------DEPENDANCIES-------------------//
import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';
//--------------STYLES-------------------//
import '../../App.css';
//--------------STATELESS COMPONENT-------------------//
const PopularMovies = ({ popularMovies }) => {
  return (
    <div className='popular-movies-container'>
      <div className='section'>
        <h1 className='section-header'>Popular Movies</h1>
      </div>
      <div className='six-poster-container'>
        <>
          {popularMovies.slice(0, 8).map((popularMovie, index) => (
            <div key={popularMovie.id}>
              <Link to={`/movie/${popularMovie.id}`}>
                <Tilt
                  className='Tilt'
                  options={{ max: 12, scale: 1.1, perspective: 1000 }}
                >
                  <img
                    src={
                      'http://image.tmdb.org/t/p/w500' +
                      popularMovie.poster_path
                    }
                    alt={popularMovie.title}
                    className='posters'
                  />
                </Tilt>
              </Link>
            </div>
          ))}
        </>
      </div>
    </div>
  );
};

export default PopularMovies;
