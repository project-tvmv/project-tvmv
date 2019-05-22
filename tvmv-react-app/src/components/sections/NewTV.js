//--------------DEPENDANCIES-------------------//
import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';
//--------------STYLES-------------------//
import './NewTV.css';
import '../../App.css';
//--------------STATELESS COMPONENT-------------------//
const NewTV = ({ newShows }) => {
  return (
    <div className='new-tv-container'>
      <div className='section'>
        <h1 className='section-header'>New to TV</h1>
        <p className='seemore'>see more</p>
      </div>
      <div className='six-poster-container'>
        {newShows.slice(0, 6).map((newShow, index) => (
          <div key={newShow.id}>
            <Link to={`/television/${newShow.id}`}>
              <Tilt
                className='Tilt'
                options={{ max: 10, scale: 1.05, perspective: 500 }}
              >
                <img
                  src={
                    'http://image.tmdb.org/t/p/original' + newShow.poster_path
                  }
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
