import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';

const NewShows = ({ newShows }) => {
  return (
    <div className='movie-sections'>
      <h1 className='movie-section-header'>New on TV</h1>
      <div className='movie-six-poster-container twelve-movies'>
        {newShows.slice(0, 16).map((newShow, index) => (
          <div key={newShow.id}>
            <Link to={`/television/${newShow.id}`}>
              <Tilt
                className='Tilt'
                options={{ max: 12, scale: 1.04, perspective: 500 }}
              >
                <img
                  src={
                    'http://image.tmdb.org/t/p/w500' + newShow.poster_path
                  }
                  alt={newShow.name}
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

export default NewShows;
