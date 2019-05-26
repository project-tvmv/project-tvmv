import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';

const RomCom = ({ romanticComedy }) => {
  return (
    <div className='movie-sections'>
      <h1 className='movie-section-header'>Date Night</h1>
      <div className='movie-six-poster-container twelve-movies'>
        {romanticComedy.slice(0, 12).map((romcom, index) => (
          <div key={romcom.id}>
            <Link to={`/movie/${romcom.id}`}>
              <Tilt
                className='Tilt'
                options={{ max: 12, scale: 1.04, perspective: 800 }}
              >
                <img
                  src={
                    'http://image.tmdb.org/t/p/w500' + romcom.poster_path
                  }
                  alt={romcom.title}
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

export default RomCom;
