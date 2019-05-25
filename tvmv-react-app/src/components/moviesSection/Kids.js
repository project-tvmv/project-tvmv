import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';

const Kids = ({ kids }) => {
  return (
    <div className='movie-sections'>
      <h1 className='movie-section-header'>For Kids</h1>
      <div className='movie-posters-container twelve-movies'>
        {kids.slice(0, 16).map((kid, index) => (
          <div key={kid.id}>
            <Link to={`/movie/${kid.id}`}>
              <Tilt
                className='Tilt'
                options={{ max: 10, scale: 1.05, perspective: 500 }}
              >
                <img
                  src={'http://image.tmdb.org/t/p/original' + kid.poster_path}
                  alt={kid.title}
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

export default Kids;