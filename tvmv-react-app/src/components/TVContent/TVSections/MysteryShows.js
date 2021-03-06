import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';

const MysteryShows = ({ mysteryShows, addDefaultSrc }) => {
  return (
    <div className='movie-sections'>
      <h1 className='movie-section-header'>For The Sherlocks</h1>
      <div className='movie-six-poster-container twelve-movies'>
        {mysteryShows.slice(0, 12).map((mysteryShows, index) => (
          <div key={mysteryShows.id}>
            <Link to={`/television/${mysteryShows.id}`}>
              <Tilt
                className='Tilt'
                options={{ max: 12, scale: 1.04, perspective: 1000 }}
              >
                <img
                  src={
                    'https://image.tmdb.org/t/p/w500' + mysteryShows.poster_path
                  }
                  alt={mysteryShows.name}
                  className='posters twelve-posters'
                  onError={addDefaultSrc}
                />
              </Tilt>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MysteryShows;
