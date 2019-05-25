import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';

const RomCom = ({ romanticComedy }) => {
  return (
    <div className='movie-sections'>
      <h1 className='movie-section-header'>Date Night</h1>
      <div className='movie-posters-container'>
        {romanticComedy.slice(0, 8).map((romcom, index) => (
          <div key={romcom.id}>
            <Link to={`/movie/${romcom.id}`}>
              <Tilt
                className='Tilt'
                options={{ max: 10, scale: 1.05, perspective: 500 }}
              >
                <img
                  src={
                    'http://image.tmdb.org/t/p/original' + romcom.poster_path
                  }
                  alt={romcom.title}
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

export default RomCom;
