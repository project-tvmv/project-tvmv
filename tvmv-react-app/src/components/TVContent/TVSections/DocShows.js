import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';

const DocShows = ({ documentaryShows }) => {
  return (
    <div className='movie-sections'>
      <h1 className='movie-section-header'>For the Intellectuals</h1>
      <div className='movie-six-poster-container twelve-movies'>
        {documentaryShows.slice(0, 16).map((documentaryShows, index) => (
          <div key={documentaryShows.id}>
            <Link to={`/television/${documentaryShows.id}`}>
              <Tilt
                className='Tilt'
                options={{ max: 12, scale: 1.04, perspective: 500 }}
              >
                <img
                  src={
                    'http://image.tmdb.org/t/p/original' +
                    documentaryShows.poster_path
                  }
                  alt={documentaryShows.name}
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

export default DocShows;