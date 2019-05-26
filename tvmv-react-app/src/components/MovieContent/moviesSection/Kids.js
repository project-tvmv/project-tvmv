import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';

const Kids = ({ kids }) => {
  return (
    <div className='movie-sections'>
      <h1 className='movie-section-header'>For Kids</h1>
      <div className='movie-six-poster-container twelve-movies'>
        {kids.slice(0, 12).map((kid, index) => (
          <div key={kid.id}>
            <Link to={`/movie/${kid.id}`}>
              <Tilt
                className='Tilt'
                options={{ max: 12, scale: 1.04, perspective: 500 }}
              >
                <img
                  src={'http://image.tmdb.org/t/p/w500' + kid.poster_path}
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
