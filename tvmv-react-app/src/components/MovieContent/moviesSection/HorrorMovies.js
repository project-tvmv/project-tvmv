import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';

const HorrorMovies = ({ horrorMovies }) => {
  return (
    <div className='movie-sections'>
      <h1 className='movie-section-header'>Sleep is for the Weak</h1>
      <div className='movie-six-poster-container twelve-movies'>
        {horrorMovies.slice(0, 12).map((horror, index) => (
          <div key={horror.id}>
            <Link to={`/movie/${horror.id}`}>
              <Tilt
                className='Tilt'
                options={{ max: 12, scale: 1.04, perspective: 1000 }}
              >
                <img
                  src={
                    'http://image.tmdb.org/t/p/w500' + horror.poster_path
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
