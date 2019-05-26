import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';

const ComedyMovies = ({ comedyMovies }) => {
  return (
    <div className='movie-sections'>
      <h1 className='movie-section-header'>Movies To Make You LOL</h1>
      <div className='movie-six-poster-container twelve-movies'>
        {comedyMovies.slice(0, 12).map((comedy, index) => (
          <div key={comedy.id}>
            <Link to={`/movie/${comedy.id}`}>
              <Tilt
                className='Tilt'
                options={{ max: 12, scale: 1.04, perspective: 500 }}
              >
                <img
                  src={
                    'http://image.tmdb.org/t/p/w500' + comedy.poster_path
                  }
                  alt={comedy.title}
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

export default ComedyMovies;
