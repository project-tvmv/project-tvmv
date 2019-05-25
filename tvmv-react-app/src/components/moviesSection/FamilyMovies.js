import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';

const FamilyMovies = ({ familyMovies }) => {
  return (
    <div className='movie-sections'>
      <h1 className='movie-section-header'>Movies for the family</h1>
      <div className='movie-posters-container'>
        {familyMovies.slice(0, 8).map((family, index) => (
          <div key={family.id}>
            <Link to={`/movie/${family.id}`}>
              <Tilt
                className='Tilt'
                options={{ max: 10, scale: 1.05, perspective: 500 }}
              >
                <img
                  src={
                    'http://image.tmdb.org/t/p/original' + family.poster_path
                  }
                  alt={family.title}
                  className='posters'
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
