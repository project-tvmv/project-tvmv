import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';

const NewMovies = ({ newMovies }) => {
  return (
    <div className='movie-sections'>
      <h1 className='movie-section-header'>What's new?</h1>
      <div className='movie-six-poster-container twelve-movies'>
        {newMovies.slice(0, 12).map((newMovies, index) => (
          <div key={newMovies.id}>
            <Link to={`/movie/${newMovies.id}`}>
              <Tilt
                className='Tilt'
                options={{ max: 12, scale: 1.04, perspective: 1000 }}
              >
                <img
                  src={
                    'https://image.tmdb.org/t/p/w500' + newMovies.poster_path
                  }
                  alt={newMovies.title}
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

export default NewMovies;
