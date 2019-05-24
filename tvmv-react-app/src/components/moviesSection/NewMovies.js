import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';

const NewMovies = ({ newMovies }) => {
  return (
    <div className='movie-sections'>
      <h1 className='movie-section-header'>What's new?</h1>
      <div className='movie-posters-container'>
        {newMovies.slice(0, 6).map((newMovies, index) => (
          <div key={newMovies.id}>
            <Link to={`/movie/${newMovies.id}`}>
              <Tilt
                className='Tilt'
                options={{ max: 10, scale: 1.05, perspective: 500 }}
              >
                <img
                  src={
                    'http://image.tmdb.org/t/p/original' + newMovies.poster_path
                  }
                  alt={newMovies.title}
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
