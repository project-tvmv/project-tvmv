import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';

const DisneyChannel = ({ disneyChannel }) => {
  return (
    <div className='movie-sections'>
      <h1 className='movie-section-header'>You're Watching Disney Channel</h1>
      <div className='movie-six-poster-container twelve-movies'>
        {disneyChannel.slice(0, 16).map((disneyChannel, index) => (
          <div key={disneyChannel.id}>
            <Link to={`/television/${disneyChannel.id}`}>
              <Tilt
                className='Tilt'
                options={{ max: 12, scale: 1.04, perspective: 500 }}
              >
                <img
                  src={
                    'http://image.tmdb.org/t/p/w500' +
                    disneyChannel.poster_path
                  }
                  alt={disneyChannel.name}
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

export default DisneyChannel;
