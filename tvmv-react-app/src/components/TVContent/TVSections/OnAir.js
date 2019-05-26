import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';

const OnAir = ({ onAir }) => {
  return (
    <div className='movie-sections'>
      <h1 className='movie-section-header'>On Air</h1>
      <div className='movie-six-poster-container twelve-movies'>
        {onAir.slice(0, 16).map((onAir, index) => (
          <div key={onAir.id}>
            <Link to={`/television/${onAir.id}`}>
              <Tilt
                className='Tilt'
                options={{ max: 12, scale: 1.04, perspective: 500 }}
              >
                <img
                  src={'http://image.tmdb.org/t/p/original' + onAir.poster_path}
                  alt={onAir.name}
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

export default OnAir;