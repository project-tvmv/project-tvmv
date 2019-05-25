import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';

const HorrorMovies = ({ horrorMovies }) => {
  return (
    <div className='movie-sections'>
      <h1 className='movie-section-header'>Sleep is for the Weak</h1>
      <div className='movie-posters-container twelve-movies'>
        {horrorMovies.slice(0, 16).map((horror, index) => (
          <div key={horror.id}>
            <Link to={`/movie/${horror.id}`}>
              <Tilt
                className='Tilt'
                options={{ max: 10, scale: 1.05, perspective: 500 }}
              >
                <img
                  src={
                    'http://image.tmdb.org/t/p/original' + horror.poster_path
                  }
                  alt={horror.title}
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

export default HorrorMovies;
