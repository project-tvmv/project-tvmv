import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';

const DisneyMovies = ({ disney }) => {
  return (
    <div className='movie-sections'>
      <h1 className='movie-section-header'>Disney Essentials</h1>
      <div className='movie-six-poster-container twelve-movies'>
        {disney.slice(0, 16).map((disney, index) => (
          <div key={disney.id}>
            <Link to={`/movie/${disney.id}`}>
              <Tilt
                className='Tilt'
                options={{ max: 12, scale: 1.04, perspective: 500 }}
              >
                <img
                  src={
                    'http://image.tmdb.org/t/p/original' + disney.poster_path
                  }
                  alt={disney.title}
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

export default DisneyMovies;
