import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';

const AdamSandler = ({ adamSandler }) => {
  return (
    <div className='movie-sections'>
      <h1 className='movie-section-header'>Top Adam Sandler Movies</h1>
      <div className='movie-six-poster-container twelve-movies'>
        {adamSandler.slice(0, 16).map((adam, index) => (
          <div key={adam.id}>
            <Link to={`/movie/${adam.id}`}>
              <Tilt
                className='Tilt'
                options={{ max: 10, scale: 1.08, perspective: 500 }}
              >
                <img
                  src={'http://image.tmdb.org/t/p/original' + adam.poster_path}
                  alt={adam.title}
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

export default AdamSandler;
