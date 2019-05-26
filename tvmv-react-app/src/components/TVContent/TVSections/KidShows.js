import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';

const KidShows = ({ kidsShows }) => {
  return (
    <div className='movie-sections'>
      <h1 className='movie-section-header'>Shows For Kids</h1>
      <div className='movie-six-poster-container twelve-movies'>
        {kidsShows.slice(0, 16).map((KidShow, index) => (
          <div key={KidShow.id}>
            <Link to={`/television/${KidShow.id}`}>
              <Tilt
                className='Tilt'
                options={{ max: 12, scale: 1.04, perspective: 500 }}
              >
                <img
                  src={
                    'http://image.tmdb.org/t/p/original' + KidShow.poster_path
                  }
                  alt={KidShow.name}
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

export default KidShows;