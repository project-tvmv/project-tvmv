import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';

const PopularMovies = ({ popularMovies }) => {
  return (
    <div className='movie-sections'>
      <h1 className='movie-section-header'>Popular Movies</h1>
      <div className='movie-posters-container twelve-movies'>
        {popularMovies.slice(0, 16).map((popular, index) => (
          <div key={popular.id}>
            <Link to={`/movie/${popular.id}`}>
              <Tilt
                className='Tilt'
                options={{ max: 10, scale: 1.05, perspective: 500 }}
              >
                <img
                  src={
                    'http://image.tmdb.org/t/p/original' + popular.poster_path
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