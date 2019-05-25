import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';

const TrendingMovies = ({ trendingMovies }) => {
  return (
    <div className='movie-sections'>
      <h1 className='movie-section-header'>What's Trending</h1>
      <div className='movie-posters-container twelve-movies'>
        {trendingMovies.slice(0, 16).map((trending, index) => (
          <div key={trending.id}>
            <Link to={`/movie/${trending.id}`}>
              <Tilt
                className='Tilt'
                options={{ max: 10, scale: 1.05, perspective: 500 }}
              >
                <img
                  src={
                    'http://image.tmdb.org/t/p/original' + trending.poster_path
                  }
                  alt={trending.title}
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

export default TrendingMovies;
