//--------------DEPENDANCIES-------------------//
import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';
//--------------STYLES-------------------//
import '../../App.css';
//--------------STATELESS COMPONENT-------------------//
const PopularShows = ({ popularShows }) => {
  return (
    <div className='popular-movies-container'>
      <div className='section second-section'>
        <h1 className='section-header'>Popular Shows</h1>
      </div>
      <div className='six-poster-container'>
        <>
          {popularShows.slice(0, 8).map((popularShow, index) => (
            <div key={popularShow.id}>
              <Link to={`/television/${popularShow.id}`}>
                <Tilt
                  className='Tilt'
                  options={{ max: 10, scale: 1.05, perspective: 500 }}
                >
                  <img
                    src={
                      'http://image.tmdb.org/t/p/w500' + popularShow.poster_path
                    }
                    alt={popularShow.title}
                    className='posters'
                  />
                </Tilt>
              </Link>
            </div>
          ))}
        </>
      </div>
    </div>
  );
};

export default PopularShows;
