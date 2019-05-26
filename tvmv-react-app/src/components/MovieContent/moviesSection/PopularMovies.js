import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';

const PopularMovies = ({ popularMovies }) => {
  return (
    <div className='movie-sections'>
      <h1 className='movie-section-header'>Popular Movies</h1>
      <div className='movie-six-poster-container twelve-movies'>
        {popularMovies.slice(0, 12).map((popular, index) => (
          <div key={popular.id}>
            <Link to={`/movie/${popular.id}`}>
              <Tilt
                className='Tilt'
                options={{ max: 12, scale: 1.04, perspective: 500 }}
              >
                <img
                  src={
                    'http://image.tmdb.org/t/p/w500' + popular.poster_path
                  }
                  alt={popular.title}
                  className='posters twelve-posters'
                />
              </Tilt>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;
