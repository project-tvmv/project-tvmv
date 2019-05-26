import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';

const RealityTV = ({ realityTV }) => {
  return (
    <div className='movie-sections'>
      <h1 className='movie-section-header'>Reality TV</h1>
      <div className='movie-six-poster-container twelve-movies'>
        {realityTV.slice(0, 12).map((realityTv, index) => (
          <div key={realityTv.id}>
            <Link to={`/television/${realityTv.id}`}>
              <Tilt
                className='Tilt'
                options={{ max: 12, scale: 1.04, perspective: 1000 }}
              >
                <img
                  src={
                    'http://image.tmdb.org/t/p/w500' + realityTv.poster_path
                  }
                  alt={realityTv.name}
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

export default RealityTV;
