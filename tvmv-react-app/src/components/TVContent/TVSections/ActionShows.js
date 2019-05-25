import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';

const ActionShows = ({ actionShows }) => {
  return (
    <div className='movie-sections'>
      <h1 className='movie-section-header'>For The Adrenaline Junkies</h1>
      <div className='movie-six-poster-container twelve-movies'>
        {actionShows.slice(0, 16).map((actionShow, index) => (
          <div key={actionShow.id}>
            <Link to={`/television/${actionShow.id}`}>
              <Tilt
                className='Tilt'
                options={{ max: 12, scale: 1.04, perspective: 500 }}
              >
                <img
                  src={
                    'http://image.tmdb.org/t/p/original' +
                    actionShow.poster_path
                  }
                  alt={actionShow.name}
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

export default ActionShows;
