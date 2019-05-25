import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';

const ComedyMovies = ({ comedyMovies }) => {
  return (
    <div className='movie-sections'>
      <h1 className='movie-section-header'>Movies To Make You LOL</h1>
      <div className='movie-posters-container twelve-movies'>
        {comedyMovies.slice(0, 16).map((comedy, index) => (
          <div key={comedy.id}>
            <Link to={`/movie/${comedy.id}`}>
              <Tilt
                className='Tilt'
                options={{ max: 10, scale: 1.05, perspective: 500 }}
              >
                <img
                  src={
                    'http://image.tmdb.org/t/p/original' + comedy.poster_path
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