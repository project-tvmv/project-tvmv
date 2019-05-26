import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';

const PopularShows = ({ popularShows }) => {
  return (
    <div className='movie-sections'>
      <h1 className='movie-section-header'>Popular TV Shows</h1>
      <div className='movie-six-poster-container twelve-movies'>
        {popularShows.slice(0, 12).map((popularShow, index) => (
          <div key={popularShow.id}>
            <Link to={`/television/${popularShow.id}`}>
              <Tilt
                className='Tilt'
                options={{ max: 12, scale: 1.04, perspective: 500 }}
              >
                <img
                  src={
                    'http://image.tmdb.org/t/p/w500' +
                    popularShow.poster_path
                  }
                  alt={popularShow.name}
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

export default PopularShows;
