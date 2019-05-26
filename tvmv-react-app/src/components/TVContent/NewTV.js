//--------------DEPENDANCIES-------------------//
import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';
//--------------STYLES-------------------//
import '../../App.css';
//--------------STATELESS COMPONENT-------------------//
const NewTV = ({ newShows }) => {
  return (
    <div className='new-tv-container'>
      <div className='section'>
        <h1 className='section-header'>New to TV</h1>
      </div>
      <div className='six-poster-container'>
        {newShows.slice(0, 8).map((newShow, index) => (
          <div key={newShow.id}>
            <Link to={`/television/${newShow.id}`}>
              <Tilt
                className='Tilt'
                options={{ max: 12, scale: 1.1, perspective: 1000 }}
              >
                <img
                  src={'https://image.tmdb.org/t/p/w500' + newShow.poster_path}
                  alt={newShow.name}
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

export default NewTV;
