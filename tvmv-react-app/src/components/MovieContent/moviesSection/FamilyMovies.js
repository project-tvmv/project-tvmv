import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';

const FamilyMovies = ({ familyMovies }) => {
  return (
    <div className='movie-sections'>
      <h1 className='movie-section-header'>Movies for the Family</h1>
      <div className='movie-six-poster-container twelve-movies'>
        {familyMovies.slice(0, 12).map((family, index) => (
          <div key={family.id}>
            <Link to={`/movie/${family.id}`}>
              <Tilt
                className='Tilt'
                options={{ max: 12, scale: 1.04, perspective: 800 }}
              >
                <img
                  src={
                    'http://image.tmdb.org/t/p/w500' + family.poster_path
                  }
                  alt={family.title}
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

export default FamilyMovies;
